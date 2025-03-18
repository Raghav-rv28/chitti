// In-memory message tracking for spam detection
export interface MessageTracker {
  userId: string;
  message: string;
  count: number;
  firstTimestamp: number;
  lastTimestamp: number;
}

export interface Timeout { 
  timeoutEnabled: boolean;
  timeoutDurationSeconds: number;
  timeoutMessage: string;
}

export interface SpamConfig {
  maxRepeatedMessages: number;
  timeWindowSeconds: number;
  cleanupIntervalSeconds: number;
  timeout: Timeout;
}

export interface BadWordConfig {
  enabled: boolean;
  words: string[];
  exemptedUsers: string;
  timeout: Timeout;
}

export interface LinkConfig {
  enabled: boolean;
  mode: 'whitelist' | 'blacklist';
  allowedLinks: string[];
  blockedLinks: string[];
  deleteMessage: boolean;
  timeout: Timeout;
}