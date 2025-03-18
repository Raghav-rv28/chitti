import { prisma } from "@repo/database";

// Get total users count
export const getUserCount = async () => {
  return await prisma.user.count();
};

// Find user by ID
export const getUserById = async (
  id: string,
): Promise<{
  id: string;
  email: string | null;
  createdAt: Date;
  settings: any;
  username: string | null;
} | null> => {
  return await prisma.user.findUnique({ where: { id } });
};

export const getUserTokens = async (userId: string) => {
  return await prisma.userSecurity.findUnique({ where: { userId } });
};

// Create a new user
export const createStreamer = async (
  name: string,
  email: string,
): Promise<{
  id: string;
  email: string | null;
  createdAt: Date;
  settings: any;
  username: string | null;
}> => {
  return await prisma.user.create({
    data: { id: "someid", username: name, email },
  });
};

//update tokens
export const updateTokens = async (
  accessToken: string,
  userId: string,
  refreshToken?: string,
): Promise<any> => {
  const updatedAt = new Date();

  return await prisma.$transaction([
    // Ensure user exists
    prisma.user.upsert({
      where: { id: userId },
      update: {}, // No updates needed
      create: { id: userId }, // Creates the user if missing
    }),

    // Now perform upsert on UserSecurity
    prisma.userSecurity.upsert({
      where: { userId },
      update: { accessToken, updatedAt, refreshToken },
      create: {
        userId,
        accessToken,
        updatedAt,
        refreshToken,
      },
    }),
  ]);
};

export const getStream = async (liveChatId: string) => {
  return await prisma.streamChat.findUnique({ where: { id: liveChatId } });
};

export const saveStream = async (
  userId: string,
  liveChatId: string,
  startTime: Date,
  title: string,
  contentDetails: {
    monitorStream: any;
  },
  description?: string,
) => {
  return await prisma.streamChat.upsert({
    where: { id: liveChatId },
    update: { description, contentDetails, title },
    create: { id: liveChatId, userId, startTime, title, contentDetails },
  });
};

//TODO: add zod validation here
// authorId: channelId
// userId: viewerId
export const saveChatMessages = async (
  channelId: string,
  message: string,
  liveChatId: string,
  userId: string,
  chatType: string,
  username: string,
  messageId: string,
) => {
  return await prisma.$transaction(async (tx) => {
    const chat = await tx.chat.findUnique({
      where: { id: messageId, userId: channelId, liveChatId },
    });
    if (chat) {
      console.log("message already saved");
      return;
    }
    await tx.viewer.upsert({
      where: { id: userId, userChannelId: channelId },
      create: {
        id: userId,
        userChannelId: channelId,
        username,
        streamChatId: liveChatId,
        totalMessages: 1,
        points: 2,
        streakDays: 0,
        createdAt: new Date(),
      },
      update: {
        points: { increment: 2 },
        totalMessages: { increment: 1 },
        streamChatId: liveChatId,
      },
    });

    return await tx.chat.create({
      data: {
        id: messageId,
        userId: channelId,
        viewerId: userId,
        message,
        liveChatId,
        username,
        chatType,
      },
    });
  });
};

export const getTopViewers = async (userId: string, limit = 10) => {
  return await prisma.viewer.findMany({
    where: { id: userId },
    orderBy: { points: "desc" },
    take: limit,
  });
};
