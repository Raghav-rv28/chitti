import { LinkConfig } from './types';

// Default configuration for link detection
export const defaultLinkConfig: LinkConfig = {
  enabled: false,
  mode: 'blacklist',
  allowedLinks: [], // Empty array means no links are explicitly allowed
  blockedLinks: [], // Empty array means no links are explicitly blocked
  deleteMessage: true,
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
  const matches = text.match(urlRegex);
  return matches || [];
}

/**
 * Check if a URL matches any pattern in the list
 */
function urlMatchesPattern(url: string, patterns: string[]): boolean {
  if (patterns.length === 0) return false;
  
  return patterns.some(pattern => {
    // Convert the pattern to a regex-safe string and support wildcards
    const regexPattern = pattern
      .replace(/\./g, '\\.') // Escape dots
      .replace(/\*/g, '.*'); // Convert * to .*
    
    const regex = new RegExp(`^${regexPattern}`, 'i');
    return regex.test(url);
  });
}

/**
 * Check if a message contains links that should be blocked
 */
export async function checkForLinks(
  channelId: string,
  userId: string,
  message: string,
  config: LinkConfig
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

  // Check each URL against the configured patterns
  for (const url of urls) {
    if (config.mode === 'whitelist') {
      // In whitelist mode, block if the URL doesn't match any allowed pattern
      if (!urlMatchesPattern(url, config.allowedLinks)) {
        return true; // URL should be blocked
      }
    } else {
      // In blacklist mode, block if the URL matches any blocked pattern
      if (urlMatchesPattern(url, config.blockedLinks)) {
        return true; // URL should be blocked
      }
    }
  }

  return false; // No blocked URLs found
}

/**
 * Clear link detection data for a channel
 */
export function clearLinkDetection(channelId: string): void {
  delete userLinks[channelId];
}

/**
 * Cleanup old link detection data
 */
function cleanupLinkDetection(): void {
  const now = Date.now();
  const timeout = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  for (const channelId in userLinks) {
    for (const userId in userLinks[channelId]) {
      if (now - userLinks[channelId][userId].timestamp > timeout) {
        delete userLinks[channelId][userId];
      }
    }

    // If no users left for this channel, delete the channel entry
    if (Object.keys(userLinks[channelId]).length === 0) {
      delete userLinks[channelId];
    }
  }
}

// Set up cleanup interval
export const cleanupInterval = setInterval(cleanupLinkDetection, 60 * 60 * 1000); // Run cleanup every hour 