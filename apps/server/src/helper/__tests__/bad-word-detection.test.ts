import { checkForBadWords } from "../bad-word-detection";
import { BadWordConfig } from "../types";


describe("Bad Word Detection", () => {
  const channelId = "test-channel";
  const userId = "user-123";

  // Mock configs for different test scenarios
  const mockConfig: BadWordConfig = {
    words: ["bhainchod", "inappropriate", "offensive"],
    exemptedUsers: "",
    enabled: true,
    timeout: {
      timeoutEnabled: true,
      timeoutDurationSeconds: 300,
      timeoutMessage: "You've been timed out.",
    },
  };

  const mockConfigWithExemptedUser: BadWordConfig = {
    words: ["badword", "inappropriate", "offensive"],
    exemptedUsers: "user-123, user-456",
    enabled: true,
    timeout: {
      timeoutEnabled: true,
      timeoutDurationSeconds: 300,
      timeoutMessage: "You've been timed out.",
    },
  };

  const mockConfigEmptyWords: BadWordConfig = {
    words: [],
    exemptedUsers: "",
    enabled: true,
    timeout: {
      timeoutEnabled: true,
      timeoutDurationSeconds: 300,
      timeoutMessage: "You've been timed out.",
    },
  };

  // Clear the interval after all tests
  afterAll(() => {
    // No cleanup needed since cleanupTimeoutInterval is removed
  });

  it("should detect bad words in a message", async () => {
    const message = "This message contains a bhainchod that should be detected";
    const result = await checkForBadWords(
      channelId,
      userId,
      message,
      mockConfig,
    );
    expect(result).toBe(true);
  });

  it("should not detect bad words in a clean message", async () => {
    const message = "This message is completely clean";
    const result = await checkForBadWords(
      channelId,
      userId,
      message,
      mockConfig,
    );
    expect(result).toBe(false);
  });

  it("should not detect partial word matches", async () => {
    const message =
      "This message contains badwordish which is not a complete match";
    const result = await checkForBadWords(
      channelId,
      userId,
      message,
      mockConfig,
    );
    expect(result).toBe(false);
  });

  it("should be case insensitive", async () => {
    const message = "This message contains BHAINCHOD with different case";
    const result = await checkForBadWords(
      channelId,
      userId,
      message,
      mockConfig,
    );
    expect(result).toBe(true);
  });

  it("should skip check for exempted users", async () => {
    const message = "This message contains badword but user is exempted";
    const result = await checkForBadWords(
      channelId,
      userId,
      message,
      mockConfigWithExemptedUser,
    );
    expect(result).toBe(false);
  });

  it("should skip check if there are no bad words defined", async () => {
    const message = "This message would normally contain a badword";
    const result = await checkForBadWords(
      channelId,
      userId,
      message,
      mockConfigEmptyWords,
    );
    expect(result).toBe(false);
  });
});
