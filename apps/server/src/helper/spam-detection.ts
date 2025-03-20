import { SpamConfig } from "./types";
import { timeoutUser } from "./timeout-utils";

// Track repeated messages from users
const userMessageHistory: Record<
  string,
  { messages: string[]; lastCleanup: number }
> = {};

// Default spam detection configuration
export const defaultSpamConfig: SpamConfig = {
  maxRepeatedMessages: 3,
  timeWindowSeconds: 10,
  cleanupIntervalSeconds: 60,
  timeout: {
    timeoutEnabled: true,
    timeoutDurationSeconds: 300, // 5 minutes
    timeoutMessage: "You've been timed out for spamming.",
  },
};

// Reference to active streamers for config access
let activeStreamersRef: Record<string, any> = {};

/**
 * Set the reference to active streamers
 */
export function setActiveStreamersReference(streamers: Record<string, any>) {
  activeStreamersRef = streamers;
}

/**
 * Get spam configuration for a channel from memory
 */
function getSpamConfig(channelId: string): SpamConfig {
  return (
    activeStreamersRef[channelId]?.moderationSettings?.spamConfig ||
    defaultSpamConfig
  );
}

/**
 * Check for spam messages
 */
export async function checkForSpam(
  channelId: string,
  userId: string,
  message: string,
  config: SpamConfig = defaultSpamConfig,
): Promise<boolean> {
  const now = Date.now();
  const key = `${channelId}:${userId}`;

  // Initialize user history if not exists
  if (!userMessageHistory[key]) {
    userMessageHistory[key] = {
      messages: [],
      lastCleanup: now,
    };
  }

  // Clean up old messages if needed
  if (
    now - userMessageHistory[key].lastCleanup >
    config.cleanupIntervalSeconds * 1000
  ) {
    userMessageHistory[key].messages = userMessageHistory[key].messages.filter(
      (msg) => {
        const msgData = JSON.parse(msg);
        return now - msgData.timestamp < config.timeWindowSeconds * 1000;
      },
    );
    userMessageHistory[key].lastCleanup = now;
  }

  // Count occurrences of this message in the time window
  const messageCount = userMessageHistory[key].messages.filter((msg) => {
    const msgData = JSON.parse(msg);
    return (
      msgData.text === message &&
      now - msgData.timestamp < config.timeWindowSeconds * 1000
    );
  }).length;

  // Add current message to history
  userMessageHistory[key].messages.push(
    JSON.stringify({ text: message, timestamp: now }),
  );

  // Check if message count exceeds threshold
  if (messageCount >= config.maxRepeatedMessages - 1) {
    // Spam detected, timeout if enabled
    if (config.timeout.timeoutEnabled) {
      const liveChatId = activeStreamersRef[channelId]?.liveChatId;
      if (liveChatId) {
        await timeoutUser(channelId, userId, liveChatId, config.timeout);
      }
    }
    return true;
  }

  return false;
}

/**
 * Clear spam detection for a channel
 */
export function clearSpamDetection(channelId: string): void {
  // Remove all entries for this channel
  Object.keys(userMessageHistory).forEach((key) => {
    if (key.startsWith(`${channelId}:`)) {
      delete userMessageHistory[key];
    }
  });
}

// Initialize cleanup interval
export const cleanupInterval = setInterval(() => {
  const now = Date.now();

  // Clean up all user message histories
  for (const key in userMessageHistory) {
    if (
      now - userMessageHistory[key].lastCleanup >
      defaultSpamConfig.cleanupIntervalSeconds * 1000
    ) {
      userMessageHistory[key].messages = userMessageHistory[
        key
      ].messages.filter((msg) => {
        const msgData = JSON.parse(msg);
        return (
          now - msgData.timestamp < defaultSpamConfig.timeWindowSeconds * 1000
        );
      });
      userMessageHistory[key].lastCleanup = now;
    }
  }
}, defaultSpamConfig.cleanupIntervalSeconds * 1000);
