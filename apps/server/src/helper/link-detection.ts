import { LinkConfig } from "./types";
import { timeoutUser } from "./timeout-utils";

// Default configuration for link detection
export const defaultLinkConfig: LinkConfig = {
  enabled: false,
  mode: "blacklist",
  allowedLinks: [], // Empty array means no links are explicitly allowed
  blockedLinks: ["https://facebook.com/"], // Empty array means no links are explicitly blocked
  deleteMessage: true,
  timeout: {
    timeoutEnabled: true,
    timeoutDurationSeconds: 300, // 5 minutes
    timeoutMessage:
      "Your message contained prohibited links. You've been timed out.",
  },
};

// Reference to the active streamers object
let activeStreamers: any = {};

/**
 * Set the reference to the active streamers object
 */
export function setActiveStreamersReference(streamers: any): void {
  activeStreamers = streamers;
}

// Store user links for cleanup
const userLinks: Record<string, Record<string, { timestamp: number }>> = {};

/**
 * Extract URLs from a message
 */
function extractUrls(text: string): string[] {
  // Basic URL regex pattern
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

/**
 * Check if a URL matches any pattern in the provided list
 */
function urlMatchesPattern(url: string, patterns: string[]): boolean {
  // Convert URL to lowercase for case-insensitive matching
  const lowerUrl = url.toLowerCase();

  for (const pattern of patterns) {
    if (lowerUrl.includes(pattern.toLowerCase())) {
      return true;
    }
  }

  return false;
}

/**
 * Check for prohibited links in a message
 */
export async function checkForLinks(
  channelId: string,
  userId: string,
  message: string,
  config: LinkConfig,
): Promise<boolean> {
  // Early return if link detection is disabled
  if (!config.enabled) {
    return false;
  }

  // Extract URLs from the message
  const urls = extractUrls(message);
  if (urls.length === 0) {
    return false; // No URLs found
  }

  // Track user and their message containing links
  if (!userLinks[channelId]) {
    userLinks[channelId] = {};
  }

  if (!userLinks[channelId][userId]) {
    userLinks[channelId][userId] = {
      timestamp: Date.now(),
    };
  }

  // Check each URL against allowed/blocked patterns
  let hasProhibitedLink = false;

  for (const url of urls) {
    if (config.mode === "whitelist") {
      // In whitelist mode, links are blocked unless explicitly allowed
      if (
        config.allowedLinks.length === 0 ||
        !urlMatchesPattern(url, config.allowedLinks)
      ) {
        hasProhibitedLink = true;
        break;
      }
    } else {
      // In blacklist mode, links are allowed unless explicitly blocked
      if (
        config.blockedLinks.length > 0 &&
        urlMatchesPattern(url, config.blockedLinks)
      ) {
        hasProhibitedLink = true;
        break;
      }
    }
  }

  // If prohibited link found, timeout the user if enabled
  if (hasProhibitedLink && config.timeout.timeoutEnabled) {
    const liveChatId = activeStreamers[channelId]?.liveChatId;
    if (liveChatId) {
      await timeoutUser(channelId, userId, liveChatId, config.timeout);
    }
    return true;
  }

  return hasProhibitedLink;
}

/**
 * Clear link detection data for a channel
 */
export function clearLinkDetection(channelId: string): void {
  // Delete all entries for this channel
  delete userLinks[channelId];
}

/**
 * Clean up old link detection data
 */
function cleanupLinkDetection(): void {
  const now = Date.now();
  const expiryTime = 24 * 60 * 60 * 1000; // 24 hours

  for (const channelId in userLinks) {
    for (const userId in userLinks[channelId]) {
      if (now - userLinks[channelId][userId].timestamp > expiryTime) {
        delete userLinks[channelId][userId];
      }
    }

    // Delete empty channel entries
    if (Object.keys(userLinks[channelId]).length === 0) {
      delete userLinks[channelId];
    }
  }
}

// Initialize cleanup interval
export const cleanupInterval = setInterval(
  cleanupLinkDetection,
  60 * 60 * 1000,
); // Run hourly
