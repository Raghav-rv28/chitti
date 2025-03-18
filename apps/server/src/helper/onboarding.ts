import { saveTokens } from "../providers/youtube/auth";
import { prisma } from "@repo/database";

const DEFAULT_COMMANDS = [
  {
    trigger: "!info",
    response: "This is a chatbot for live streams!",
    description: "Provides bot information.",
  },
  {
    trigger: "!commands",
    response: "List of available commands: !info, !commands",
    description: "Shows available commands.",
  },
  {
    trigger: "!help",
    response: "Need help? Ask the streamer!",
    description: "General help message.",
  },
];

const DEFAULT_SPAM_CONFIG = {
  maxRepeatedMessages: 5,
  timeWindowSeconds: 10,
  cleanupIntervalSeconds: 60,
  timeout: {
    timeoutEnabled: false,
    timeoutDurationSeconds: 0,
    timeoutMessage: "",
  },
};
const DEFAULT_BAD_WORD_CONFIG = {
  enabled: false,
  words: [],
  exemptedUsers: [],
  timeout: {
    timeoutEnabled: false,
    timeoutDurationSeconds: 0,
    timeoutMessage: "",
  },
};
const DEFAULT_LINK_CONFIG = {
  enabled: false,
  mode: "whitelist",
  allowedLinks: [],
  blockedLinks: [],
  deleteMessage: false,
  timeout: {
    timeoutEnabled: false,
    timeoutDurationSeconds: 0,
    timeoutMessage: "",
  },
};

/**
 * Onboards a user by creating their profile and setting default commands.
 * Ensures onboarding runs only once per user.
 * statistics:{
    viewCount?: number | null;
    commentCount?: number | null;
    subscriberCount?: number | null;
    hiddenSubscriberCount?: boolean;
    videoCount?: number | null;
  }
 */

export const onboardUser = async (user: {
  userId: string;
  email: string;
  username?: string | null;
  statistics?: any;
}) => {
  return await prisma.$transaction(async (tx) => {
    // Check if the user is already onboarded
    const existingUser = await tx.user.findUnique({
      where: { id: user.userId },
    });
    if (existingUser) return; // User already onboarded

    // Create user profile
    await tx.user.create({
      data: {
        id: user.userId,
        email: user.email,
        username: user?.username,
        settings: user?.statistics,
      },
    });
    // save tokens
    // Insert default commands
    await tx.customCommand.createMany({
      data: DEFAULT_COMMANDS.map((cmd) => ({
        userId: user.userId,
        cooldown: 0,
        requiredUserLevel: "viewer",
        trigger: cmd.trigger,
        response: cmd.response,
      })),
    });
    await tx.moderation.create({
      data: {
        userId: user.userId,
        spamConfig: DEFAULT_SPAM_CONFIG,
        blacklist: DEFAULT_BAD_WORD_CONFIG,
        links: DEFAULT_LINK_CONFIG,
      },
    });
  });
};
