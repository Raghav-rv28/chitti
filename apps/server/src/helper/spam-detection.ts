import { SpamConfig } from "./types";

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
 * Check if a message is spam based on repeated messages
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
    userMessageHistory[key].messages = [];
    userMessageHistory[key].lastCleanup = now;
  }

  // Add new message
  userMessageHistory[key].messages.push(message);

  // Check for repeated messages within time window
  const recentMessages = userMessageHistory[key].messages.filter(
    (msg) =>
      now - userMessageHistory[key].lastCleanup <=
      config.timeWindowSeconds * 1000,
  );

  // Count occurrences of the current message
  const messageCount = recentMessages.filter((msg) => msg === message).length;

  // If message appears too many times, consider it spam
  return messageCount >= config.maxRepeatedMessages;
}

/**
 * Clear spam detection data for a channel
 */
export function clearSpamDetection(channelId: string): void {
  // Remove all entries for this channel
  Object.keys(userMessageHistory).forEach((key) => {
    if (key.startsWith(`${channelId}:`)) {
      delete userMessageHistory[key];
    }
  });
}

/**
 * Cleanup interval to remove old messages
 */
export const cleanupInterval = setInterval(() => {
  const now = Date.now();
  Object.entries(userMessageHistory).forEach(([key, data]) => {
    if (
      now - data.lastCleanup >
      defaultSpamConfig.cleanupIntervalSeconds * 1000
    ) {
      data.messages = [];
      data.lastCleanup = now;
    }
  });
}, defaultSpamConfig.cleanupIntervalSeconds * 1000);
