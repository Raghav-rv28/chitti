import { BadWordConfig } from "./types";
import { prisma } from "@repo/database";
import { timeoutUser, isUserTimedOut, removeUserTimeout, cleanupTimeouts } from './timeout-utils';

// Default bad word configuration
export const defaultBadWordConfig: BadWordConfig = {
  words: ["fuck", "bhainchod", "nonono"],
  exemptedUsers: "",
  enabled: true,
  timeout: {
    timeoutEnabled: true,
    timeoutDurationSeconds: 300, // 5 minutes
    timeoutMessage:
      "Your message contained inappropriate content. You've been timed out.",
  }
};

// Reference to active streamers (will be populated from chat-polling.ts)
let activeStreamersRef: Record<
  string,
  { liveChatId: string; nextPage: string; oauthClient: any; moderationSettings?: any }
> = {};

/**
 * Set the reference to active streamers
 */
export function setActiveStreamersReference(
  streamers: Record<
    string,
    { liveChatId: string; nextPage: string; oauthClient: any; moderationSettings?: any }
  >,
) {
  activeStreamersRef = streamers;
}

/**
 * Get the bad word configuration for a channel
 */
export async function getBadWordConfig(
  channelId: string,
): Promise<BadWordConfig> {
  try {
    const moderation = await prisma.moderation.findFirst({
      where: { userId: channelId },
    });

    return (
      (moderation?.blacklist as unknown as BadWordConfig) || defaultBadWordConfig
    );
  } catch (error) {
    console.error("Error fetching bad word config:", error);
    return defaultBadWordConfig;
  }
}

/**
 * Check for bad words in a message
 */
export async function checkForBadWords(
  channelId: string,
  userId: string,
  message: string,
  config: BadWordConfig = defaultBadWordConfig,
): Promise<boolean> {
  if (!config.enabled) {
    return false;
  }

  // Skip check for exempted users
  if (config.exemptedUsers.includes(userId)) {
    return false;
  }

  // Check if user is already timed out
  if (isUserTimedOut(channelId, userId)) {
    return true;
  }

  const normalizedMessage = message.toLowerCase();
  
  // Check for bad words
  for (const word of config.words) {
    if (
      normalizedMessage.includes(word.toLowerCase()) ||
      normalizedMessage.replace(/\s/g, "").includes(word.toLowerCase())
    ) {
      // If bad word found, timeout the user if enabled
      if (config.timeout.timeoutEnabled) {
        const liveChatId = activeStreamersRef[channelId]?.liveChatId;
        if (liveChatId) {
          await timeoutUser(channelId, userId, liveChatId, config.timeout);
        }
      }
      return true;
    }
  }

  return false;
}

/**
 * Clear bad word detection for a channel
 */
export function clearBadWordDetection(channelId: string): void {
  // Any channel-specific cleanup needed
}

// Re-export timeout utilities for other modules to use
export { timeoutUser, isUserTimedOut, removeUserTimeout, cleanupTimeouts };
