import { google } from "googleapis";
import { getOAuth2ClientForUser } from "../providers/youtube/auth";
import { awardUserPoints } from "../queries/points";
import { saveStream, saveChatMessages } from "../queries/queries";
import { prisma } from "@repo/database";
import { SpamConfig, BadWordConfig, LinkConfig } from "./types";

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
  removeUserTimeout,
} from "./bad-word-detection";

// Import link detection module
import {
  checkForLinks,
  clearLinkDetection,
  cleanupInterval as linkCleanupInterval,
  defaultLinkConfig,
  setActiveStreamersReference as setLinkActiveStreamersReference,
} from "./link-detection";

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
      linkConfig: LinkConfig;
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
      linkConfig:
        (moderation?.links as unknown as LinkConfig) || defaultLinkConfig,
    },
  };

  // Update references in both detection modules
  setSpamActiveStreamersReference(activeStreamers);
  setBadWordActiveStreamersReference(activeStreamers);
  setLinkActiveStreamersReference(activeStreamers);
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
 * Get link configuration for a channel from memory
 */
function getLinkConfig(channelId: string): LinkConfig {
  return (
    activeStreamers[channelId]?.moderationSettings.linkConfig ||
    defaultLinkConfig
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
 * Send a message to the live chat
 */
async function sendChatMessage(
  channelId: string,
  message: string
): Promise<void> {
  try {
    if (!activeStreamers[channelId]?.oauthClient || !activeStreamers[channelId]?.liveChatId) {
      console.error(`Cannot send message: missing OAuth client or liveChatId for channel ${channelId}`);
      return;
    }

    await youtube.liveChatMessages.insert({
      auth: activeStreamers[channelId].oauthClient,
      part: ["snippet"],
      requestBody: {
        snippet: {
          liveChatId: activeStreamers[channelId].liveChatId,
          type: "textMessageEvent",
          textMessageDetails: {
            messageText: message
          }
        }
      }
    });

    console.log(`Message sent to channel ${channelId}: ${message}`);
  } catch (error) {
    console.error(`Error sending message to chat:`, error);
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
  const linkConfig = getLinkConfig(channelId);

  // Process commands if it's a command
  if (displayMessage.startsWith("!")) {
    try {
      // Pass the display name directly from the message
      const response = await handleCommands(
        channelId, 
        authorChannelId, 
        displayName,
        authorChannelId,
        displayMessage,
        activeStreamers
      );
      
      if (response) {
        // Send response back to chat
        await sendChatMessage(channelId, response);
      }
    } catch (error) {
      console.error("Error processing command:", error);
    }
  }

  // Run moderation checks in parallel
  const [isSpam, containsBadWords, containsBlockedLinks] = await Promise.all([
    checkForSpam(channelId, authorChannelId, displayMessage, spamConfig),
    checkForBadWords(channelId, authorChannelId, displayMessage, badWordConfig),
    checkForLinks(channelId, authorChannelId, displayMessage, linkConfig),
  ]);

  // Handle spam detection
  if (isSpam) {
    console.log(`Deleting spam message from ${displayName}: ${displayMessage}`);
    // Don't await this - let it process in the background
    deleteMessage(channelId, id);
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
  }

  // Handle blocked link detection
  if (containsBlockedLinks) {
    console.log(
      `Deleting message with blocked links from ${displayName}: ${displayMessage}`,
    );
    // Don't await this - let it process in the background
    deleteMessage(channelId, id);
  }

  // Process message storage and points in parallel
  // These are independent operations that can run concurrently
  await saveChatMessages(
    channelId,
    displayMessage,
    liveChatId,
    authorChannelId,
    type,
    displayName,
  );
  if (!isSpam && !containsBadWords && !containsBlockedLinks) {
    awardUserPoints(
      authorChannelId,
      displayName,
      channelId,
      liveChatId,
      displayMessage,
    );
  }
  return;
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
      clearLinkDetection(channelId);
    });
  }
}

// Start the polling interval
const interval = setInterval(pollLiveChats, 5000);

// Initialize active streamers reference for bad word detection
setBadWordActiveStreamersReference(activeStreamers);
setLinkActiveStreamersReference(activeStreamers);

export {
  addStreamer,
  findActiveChat,
  interval,
  removeStreamer,
  triggerTTS,
  spamCleanupInterval,
  cleanupTimeoutInterval,
};
