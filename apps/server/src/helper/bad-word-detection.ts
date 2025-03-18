import { BadWordConfig } from "./types";
import { prisma } from "@repo/database";
import { google } from "googleapis";

const youtube = google.youtube("v3");

// Default bad word configuration
export const defaultBadWordConfig: BadWordConfig = {
  words: ["fuck", "bhainchod","nonono"],
  exemptedUsers: "",
  enabled: true,
  timeoutEnabled: true,
  timeoutDurationSeconds: 300, // 5 minutes
  timeoutMessage:
    "Your message contained inappropriate content. You've been timed out.",
};

// Map to track user timeouts
const userTimeouts: Record<string, number> = {};

// Reference to active streamers (will be populated from chat-polling.ts)
let activeStreamersRef: Record<
  string,
  { liveChatId: string; nextPage: string; oauthClient: any }
> = {};

/**
 * Set reference to active streamers (called from chat-polling.ts)
 */
export function setActiveStreamersReference(
  streamers: Record<
    string,
    { liveChatId: string; nextPage: string; oauthClient: any }
  >,
) {
  activeStreamersRef = streamers;
}

/**
 * Get bad word configuration for a channel
 */
export async function getBadWordConfig(
  channelId: string,
): Promise<BadWordConfig> {
  const moderation = await prisma.moderation.findFirst({
    where: {
      userId: channelId,
    },
  });
  return (
    (moderation?.blacklist as unknown as BadWordConfig) || defaultBadWordConfig
  );
}

/**
 * Timeout a user by sending a moderation action through the YouTube API
 */
export async function timeoutUser(
  channelId: string,
  userId: string,
  liveChatId: string,
  durationSeconds: number,
  message: string,
): Promise<void> {
  try {
    if (!activeStreamersRef[channelId]?.oauthClient) {
      console.error(
        `Cannot timeout user: no OAuth client for channel ${channelId}`,
      );
      return;
    }

    // Store timeout in memory to prevent further messages until timeout expires
    const timeoutUntil = Date.now() + durationSeconds * 1000;
    userTimeouts[`${channelId}:${userId}`] = timeoutUntil;

    // Send timeout message to the user
    await youtube.liveChatMessages.insert({
      auth: activeStreamersRef[channelId].oauthClient,
      part: ["snippet"],
      requestBody: {
        snippet: {
          liveChatId: liveChatId,
          type: "textMessageEvent",
          textMessageDetails: {
            messageText: message,
          },
        },
      },
    });

    // To actually ban/timeout the user with YouTube APIs, you would need
    // to use the liveChatBans.insert method, which requires moderator permissions
    // This is commented out as it requires additional setup and permissions
    /*
    await youtube.liveChatBans.insert({
      auth: activeStreamersRef[channelId].oauthClient,
      part: ["snippet"],
      requestBody: {
        snippet: {
          liveChatId: liveChatId,
          type: "temporary",
          banDurationSeconds: durationSeconds,
          bannedUserDetails: {
            channelId: userId
          }
        }
      }
    });
    */

    console.log(
      `User ${userId} timed out in channel ${channelId} for ${durationSeconds} seconds`,
    );
  } catch (error) {
    console.error(`Error timing out user ${userId}:`, error);
  }
}

/**
 * Check if a user is currently in timeout
 */
export function isUserTimedOut(channelId: string, userId: string): boolean {
  const key = `${channelId}:${userId}`;
  const timeoutUntil = userTimeouts[key];

  if (!timeoutUntil) {
    return false;
  }

  // Check if timeout has expired
  if (Date.now() > timeoutUntil) {
    // Timeout expired, remove from map
    delete userTimeouts[key];
    return false;
  }

  return true;
}

/**
 * Clean up expired timeouts from the timeout tracker
 */
export function cleanupTimeouts(): void {
  const currentTime = Date.now();

  Object.keys(userTimeouts).forEach((key) => {
    if (currentTime > userTimeouts[key]) {
      delete userTimeouts[key];
    }
  });
}

/**
 * Check if a message contains any bad words from the blacklist
 */
export async function checkForBadWords(
  channelId: string,
  userId: string,
  message: string,
  config: BadWordConfig = defaultBadWordConfig,
): Promise<boolean> {
  // If there are no bad words defined, skip check
  if (!config.words || config.words.length === 0) {
    return false;
  }

  // Check if the user is exempted
  const exemptedUsers = config.exemptedUsers
    .split(",")
    .map((id: string) => id.trim());
  if (exemptedUsers.includes(userId)) {
    return false;
  }

  // Convert message to lowercase for case-insensitive matching
  const lowerMessage = message.toLowerCase();

  // Check if the message contains any bad words
  for (const word of config.words) {
    console.log(word, lowerMessage);
    // Use word boundary check to match whole words only
    const regex = new RegExp(`\\b${word.toLowerCase()}\\b`, "i");
    if (regex.test(lowerMessage)) {
      console.log(
        `Bad word "${word}" detected from user ${userId} in channel ${channelId}`,
      );
      return true;
    }
  }

  return false;
}

// Periodically clean up timeouts
export const cleanupTimeoutInterval = setInterval(
  cleanupTimeouts,
  15 * 60 * 1000,
);

/**
 * Clear bad word detection data for a channel
 */
export function clearBadWordDetection(channelId: string): void {
  // Remove all entries for this channel
  Object.keys(userTimeouts).forEach((key) => {
    if (key.startsWith(`${channelId}:`)) {
      delete userTimeouts[key];
    }
  });
}

/**
 * Remove a user from timeout
 */
<<<<<<< Updated upstream
export async function removeUserTimeout(channelId: string, userId: string): Promise<boolean> {
=======
export function removeUserTimeout(channelId: string, userId: string): boolean {
>>>>>>> Stashed changes
  const key = `${channelId}:${userId}`;
  
  if (userTimeouts[key]) {
    delete userTimeouts[key];
    console.log(`User ${userId} removed from timeout in channel ${channelId}`);
    return true;
  }
  
  return false;
}
<<<<<<< Updated upstream

    
=======
>>>>>>> Stashed changes
