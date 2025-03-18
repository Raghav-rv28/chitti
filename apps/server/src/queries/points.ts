import { differenceInMinutes } from "date-fns";
import { prisma } from "@repo/database";
const KEYWORD_BONUS = ["thank you", "great stream", "love this"]; // Example meaningful words
const MESSAGE_LENGTH_BONUS = 20; // Characters threshold for bonus
const COOLDOWN_LIMIT = 5; // Max messages in 10 seconds before cooldown

const recentMessages = new Map<string, { timestamp: number; count: number }>();

/**
 * Awards points based on user messages and time spent in the chat.
 * @param userId streamers Id
 * @param authorId viewer Id
 */
export const awardUserPoints = async (
  authorId: string,
  username: string,
  userId: string,
  liveChatId: string,
  message: string,
  broadcastId: string,
  repliedTo?: string,
) => {
  return await prisma.$transaction(async (tx) => {
    const now = Date.now();
    const userStats = recentMessages.get(`${authorId}-${liveChatId}`) || {
      timestamp: 0,
      count: 0,
    };

    // Implement cooldown period
    if (now - userStats.timestamp < 10000) {
      if (userStats.count >= COOLDOWN_LIMIT) return;
      userStats.count++;
    } else {
      userStats.count = 1;
      userStats.timestamp = now;
    }
    recentMessages.set(`${authorId}-${liveChatId}`, userStats);

    // Calculate total points before DB update
    let totalPoints = 2; // Base points for sending a message
    let totalMessagesIncrement = 1;

    // Bonus for interaction (replying to another user)
    if (repliedTo) {
      totalPoints += 3;
    }

    // Bonus for meaningful messages
    if (KEYWORD_BONUS.some((word) => message.toLowerCase().includes(word))) {
      totalPoints += 2;
    }

    if (message.length > MESSAGE_LENGTH_BONUS) {
      totalPoints += 1;
    }

    // Get last message timestamp for the user
    const lastMessage = await tx.chat.findFirst({
      where: { viewerId: authorId },
      orderBy: { timestamp: "desc" },
      select: { timestamp: true },
    });

    // Time-based point awarding
    if (lastMessage) {
      const minutesSinceLastActive = differenceInMinutes(
        new Date(),
        lastMessage.timestamp,
      );
      if (minutesSinceLastActive >= 5) {
        totalPoints += 5;
      }
    }
    console.log(broadcastId);
    // Upsert viewer with all computed updates in one query
    await tx.viewer.upsert({
      where: { id: authorId },
      create: {
        id: authorId,
        userChannelId: userId,
        username,
        streamChatId: broadcastId,
        totalMessages: totalMessagesIncrement,
        points: totalPoints,
        streakDays: 0,
        createdAt: new Date(),
      },
      update: {
        totalMessages: { increment: totalMessagesIncrement },
        points: { increment: totalPoints },
        username,
        streamChatId: broadcastId,
      },
    });
  });
};
