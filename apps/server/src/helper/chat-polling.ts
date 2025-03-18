import { google } from "googleapis";
import { getOAuth2ClientForUser } from "../providers/youtube/auth";
import { getCommands } from "../queries/commands";
import { awardUserPoints } from "../queries/points";
import { saveStream, saveChatMessages } from "../queries/queries";
import { prisma } from "@repo/database";
import { SpamConfig, BadWordConfig } from "./types";

// Import spam detection and bad word detection modules
import {
  checkForSpam,
  clearSpamDetection,
  cleanupInterval as spamCleanupInterval,
  defaultSpamConfig,
  setActiveStreamersReference as setSpamActiveStreamersReference,
} from "./spam-detection";

import {
  checkForBadWords,
  isUserTimedOut,
  timeoutUser,
  setActiveStreamersReference as setBadWordActiveStreamersReference,
  clearBadWordDetection,
  cleanupTimeoutInterval,
  defaultBadWordConfig,
} from "./bad-word-detection";

// Define active streamers with moderation settings
const activeStreamers: Record<
  string,
  {
    liveChatId: string;
    nextPage: string;
    oauthClient: any;
    moderationSettings: {
      spamConfig: SpamConfig;
      badWordConfig: BadWordConfig;
    };
  }
> = {};

// YouTube API client
const youtube = google.youtube("v3");

/**
 * Add a streamer to the active streamers list
 */
async function addStreamer(channelId: string, liveChatId: string) {
  const auth = await getOAuth2ClientForUser(channelId);

  // Fetch moderation settings from database
  const moderation = await prisma.moderation.findFirst({
    where: {
      userId: channelId,
    },
  });

  // Initialize streamer with moderation settings
  activeStreamers[channelId] = {
    liveChatId,
    nextPage: "",
    oauthClient: auth,
    moderationSettings: {
      spamConfig:
        (moderation?.spamConfig as unknown as SpamConfig) || defaultSpamConfig,
      badWordConfig:
        (moderation?.blacklist as unknown as BadWordConfig) ||
        defaultBadWordConfig,
    },
  };

  // Update references in both detection modules
  setSpamActiveStreamersReference(activeStreamers);
  setBadWordActiveStreamersReference(activeStreamers);
}

/**
 * Get spam configuration for a channel from memory
 */
function getSpamConfig(channelId: string): SpamConfig {
  return (
    activeStreamers[channelId]?.moderationSettings.spamConfig ||
    defaultSpamConfig
  );
}

/**
 * Get bad word configuration for a channel from memory
 */
function getBadWordConfig(channelId: string): BadWordConfig {
  return (
    activeStreamers[channelId]?.moderationSettings.badWordConfig ||
    defaultBadWordConfig
  );
}

/**
 * Remove a streamer from the active streamers list
 */
function removeStreamer(channelId: string): void {
  delete activeStreamers[channelId];
  if (activeStreamers[0] === undefined) {
    interval.unref();
  }
}

/**
 * Find active live chat for a channel
 */
async function findActiveChat(channelId: string): Promise<string | null> {
  try {
    const auth: any = await getOAuth2ClientForUser(channelId);
    const response: any = await youtube.liveBroadcasts.list({
      auth,
      part: ["snippet"],
      mine: true,
    });
    const items: typeof response.data.items = response.data?.items ?? [];
    if (items.length === 0) {
      console.log("No Active Chat Found");
      return null;
    }

    const latestChat = items[0];

    if (latestChat?.snippet?.liveChatId) {
      console.log("Chat ID Found:", latestChat.snippet.liveChatId);
      await saveStream(
        channelId,
        latestChat.snippet.liveChatId,
        latestChat.snippet.actualStartTime,
        latestChat.snippet.title,
      );
      return latestChat.snippet.liveChatId;
    }
    return null;
  } catch (error) {
    console.error("Error fetching active chat:", error);
    return null;
  }
}

/**
 * Poll live chats for all active streamers
 */
async function pollLiveChats(): Promise<void> {
  for (const [channelId, userDetails] of Object.entries(activeStreamers)) {
    try {
      const response = await youtube.liveChatMessages.list({
        auth: userDetails.oauthClient,
        part: ["snippet", "authorDetails"],
        liveChatId: userDetails.liveChatId,
        pageToken: userDetails.nextPage,
      });
      const items: typeof response.data.items = response.data.items;
      console.log("polling", channelId, userDetails.liveChatId);
      if (items) {
        items.forEach((message: any) =>
          processMessage(channelId, message, userDetails.liveChatId),
        );
      }
      if (response.data.nextPageToken) {
        activeStreamers[channelId] = {
          ...activeStreamers[channelId],
          nextPage: response.data.nextPageToken,
        };
      }
    } catch (error) {
      console.error(`Error polling chat for ${channelId}:`, error);
    }
  }
}

/**
 * Handle chat commands that start with !
 */
async function handleCommands(
  channelId: string,
  viewerId: string,
  displayMessage: string,
) {
  const parts = displayMessage.slice(1).split(" "); // Remove "!" and split by space
  const command = parts[0].toLowerCase();
  // const args = parts.slice(1);
  //
  // //check if commentor is mod or not
  // const response = await youtube.liveChatModerators.list({
  //   auth: activeStreamers[channelId].oauthClient,
  //   part: ["snippet"],
  //   liveChatId: activeStreamers[channelId].liveChatId,
  // });
  // const moderators = response.data.items!.map(
  //   (item) => item.snippet?.moderatorDetails?.channelId || "",
  // );
  // const isModerator = moderators.includes(viewerId);

  // Check user-defined commands in DB
  const commands = await getCommands(channelId, command);
  if (commands?.response) {
    return commands.response;
  }
}

/**
 * Trigger Text-to-Speech functionality
 */
async function triggerTTS(_text: string, _message: any) {
  console.log("testing TTS");
}

/**
 * Delete a message from the live chat
 */
async function deleteMessage(
  channelId: string,
  messageId: string,
): Promise<void> {
  try {
    if (!activeStreamers[channelId]?.oauthClient) {
      console.error(
        `Cannot delete message: no OAuth client for channel ${channelId}`,
      );
      return;
    }

    await youtube.liveChatMessages.delete({
      auth: activeStreamers[channelId].oauthClient,
      id: messageId,
    });

    console.log(`Message ${messageId} deleted from channel ${channelId}`);
  } catch (error) {
    console.error(`Error deleting message ${messageId}:`, error);
  }
}

/**
 * Process live YouTube chat messages
 * - Checks for timeouts, spam, and bad words
 * - Handles commands and alerts
 */
async function processMessage(
  channelId: string,
  message: any,
  liveChatId: string,
): Promise<void> {
  // Early return for empty messages
  if (!message?.snippet?.displayMessage) {
    return;
  }

  const { authorChannelId, displayMessage, type, id } = message.snippet;
  const { displayName } = message.authorDetails;

  // Fast path: Check if user is in timeout (in-memory check, no DB)
  if (isUserTimedOut(channelId, authorChannelId)) {
    console.log(`Skipping message from timed out user ${displayName}`);
    return;
  }

  // Get cached configs (no DB queries)
  const spamConfig = getSpamConfig(channelId);
  const badWordConfig = getBadWordConfig(channelId);

  // Process commands first if it's a command (most commands are harmless)
  if (displayMessage[0] === "!") {
    // Don't await this - let it process in the background
    handleCommands(channelId, authorChannelId, displayMessage);
  }

  // Run moderation checks in parallel
  const [isSpam, containsBadWords] = await Promise.all([
    checkForSpam(channelId, authorChannelId, displayMessage, spamConfig),
    checkForBadWords(channelId, authorChannelId, displayMessage, badWordConfig),
  ]);

  // Handle spam detection
  if (isSpam) {
    console.log(`Deleting spam message from ${displayName}: ${displayMessage}`);
    // Don't await this - let it process in the background
    deleteMessage(channelId, id);
    return;
  }

  // Handle bad word detection
  if (containsBadWords) {
    // Timeout the user with cached config
    // Don't await this - let it process in the background
    timeoutUser(
      channelId,
      authorChannelId,
      liveChatId,
      badWordConfig.timeoutDurationSeconds,
      badWordConfig.timeoutMessage,
    );

    console.log(
      `Deleting message with bad words from ${displayName}: ${displayMessage}`,
    );
    // Don't await this - let it process in the background
    deleteMessage(channelId, id);
    return;
  }

  // Process message storage and points in parallel
  // These are independent operations that can run concurrently
  Promise.all([
    saveChatMessages(
      channelId,
      displayMessage,
      liveChatId,
      authorChannelId,
      type,
      displayName,
    ),
    awardUserPoints(
      authorChannelId,
      displayName,
      channelId,
      liveChatId,
      displayMessage,
    ),
  ]).catch((error) => {
    console.error("Error processing message:", error);
  });
}

/**
 * Clear all polling and cleanup intervals
 */
export function clearPollingApi(intervalId: NodeJS.Timeout) {
  if (intervalId) {
    clearInterval(intervalId);
    console.log("Polling interval cleared");

    // Clear spam and bad word detection for all active channels
    Object.keys(activeStreamers).forEach((channelId) => {
      clearSpamDetection(channelId);
      clearBadWordDetection(channelId);
    });
  }
}

// Start the polling interval
const interval = setInterval(pollLiveChats, 5000);

// Initialize active streamers reference for bad word detection
setBadWordActiveStreamersReference(activeStreamers);

export {
  addStreamer,
  findActiveChat,
  interval,
  removeStreamer,
  triggerTTS,
  spamCleanupInterval,
  cleanupTimeoutInterval,
};
