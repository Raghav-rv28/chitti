// In-memory message tracking for spam detection
export interface MessageTracker {
  userId: string;
  message: string;
  count: number;
  firstTimestamp: number;
  lastTimestamp: number;
}
export interface SpamConfig {
  maxRepeatedMessages: number;
  timeWindowSeconds: number;
  cleanupIntervalSeconds: number;
}

export interface BadWordConfig {
  enabled: boolean;
  words: string[];
  timeoutEnabled: boolean;
  timeoutDurationSeconds: number;
  timeoutMessage: string;
  exemptedUsers: string;
}

export interface LinkConfig {
  enabled: boolean;
  mode: 'whitelist' | 'blacklist';
  allowedLinks: string[];
  blockedLinks: string[];
  deleteMessage: boolean;
}