import { differenceInMinutes } from "date-fns";
import { prisma } from "@repo/database";
import { ExternalAccountAuthorizedUserClient } from "google-auth-library/build/src/auth/externalAccountAuthorizedUserClient";
const KEYWORD_BONUS = ["thank you", "great stream", "love this"]; // Example meaningful words
const MESSAGE_LENGTH_BONUS = 20; // Characters threshold for bonus
const COOLDOWN_LIMIT = 5; // Max messages in 10 seconds before cooldown

const recentMessages = new Map<string, { timestamp: number; count: number }>();

/**
 * Awards points based on user messages and time spent in the chat.
 * @param userId streamers Id
 * @param authorId viewer Id
 * @param awardPoints boolean flag to determine if points should be awarded
 */
export const awardPoints = async (
  userId: string,
  message: string,
  authorId: string,
  chatType: string,
  username: string,
  messageId: string,
  broadcastId: string,
  awardPoints: boolean = false,
  repliedTo?: string,
) => {
  return await prisma.$transaction(async (tx) => {
    const now = Date.now();
    const userStats = recentMessages.get(messageId) || {
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
    recentMessages.set(messageId, userStats);

    // Calculate total points before DB update
    let totalPoints = 0; // Start with 0 points

    if (awardPoints) {
      // Check if points should be awarded
      totalPoints = 2; // Base points for sending a message

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
        where: { viewerId: `${authorId}-${broadcastId}` },
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
    }

    const existingViewer = await tx.viewer.findFirst({
      where: {
        username,
        userChannelId: userId,
        streamChatId: broadcastId,
      },
    });

    if (existingViewer) {
      await tx.viewer.update({
        where: {
          viewerId: existingViewer.viewerId,
          username,
          userChannelId: userId,
          streamChatId: broadcastId,
        },
        data: {
          totalMessages: { increment: 1 },
          points: { increment: totalPoints },
          username,
          streamChatId: broadcastId,
        },
      });
    } else {
      await tx.viewer.create({
        data: {
          username,
          userChannelId: userId,
          streamChatId: broadcastId,
          totalMessages: 1,
          points: totalPoints,
        },
      });
    }
  });
};
