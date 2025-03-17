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
  words: string[];
  timeoutDurationSeconds: number;
  timeoutMessage: string;
  exemptedUsers: string;
}