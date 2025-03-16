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

export const saveStream = async (
  userId: string,
  liveChatId: string,
  startTime: Date,
  title: string,
) => {
  return await prisma.streamChat.upsert({
    where: { id: liveChatId },
    update: {},
    create: { id: liveChatId, userId, startTime, title },
  });
};

//TODO: add zod validation here
export const saveChatMessages = async (
  authorId: string,
  message: string,
  liveChatId: string,
  userId: string,
  chatType: string,
  username: string,
) => {
  return await prisma.$transaction([
    prisma.streamChat.upsert({
      where: { id: liveChatId },
      create: { id: liveChatId, userId, startTime: new Date() },
      update: {},
    }),
    prisma.viewer.upsert({
      where: { userChannelId: userId, id: authorId, streamChatId: liveChatId },
      create: {
        id: authorId,
        userChannelId: userId,
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
    }),
    prisma.chat.create({
      data: {
        userId,
        viewerId: authorId,
        message,
        liveChatId,
        username,
        chatType,
      },
    }),
  ]);
};

export const getTopViewers = async (userId: string, limit = 10) => {
  return await prisma.viewer.findMany({
    where: { id: userId },
    orderBy: { points: "desc" },
    take: limit,
  });
};
