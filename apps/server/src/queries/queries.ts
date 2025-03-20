import { prisma, StreamChat } from "@repo/database";

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

//update tokens
export const updateTokens = async (
  accessToken: string,
  userId: string,
  refreshToken?: string,
): Promise<any> => {
  const updatedAt = new Date();

  return await prisma.$transaction([
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

export const getStream = async (
  id: string,
  userId: string,
): Promise<StreamChat | null> => {
  return await prisma.streamChat.findFirst({ where: { id, userId } });
};

export const saveStream = async (
  userId: string,
  liveChatId: string,
  startTime: Date,
  title: string,
  contentDetails: {
    monitorStream: any;
  },
  broadcastId: string,
  description?: string,
): Promise<StreamChat> => {
  return await prisma.streamChat.upsert({
    where: { id: broadcastId },
    update: { description, contentDetails, title },
    create: {
      id: broadcastId,
      userId,
      startTime,
      title,
      liveChatId,
      contentDetails,
    },
  });
};

export const getTopViewers = async (userId: string, limit = 10) => {
  return await prisma.viewer.findMany({
    where: { userChannelId: userId },
    orderBy: { points: "desc" },
    take: limit,
  });
};

export const saveChatMessages = async (
  channelId: string,
  message: string,
  liveChatId: string,
  userId: string,
  chatType: string,
  username: string,
  messageId: string,
  broadcastId: string,
  timestamp: Date,
) => {
  return await prisma.$transaction(async (tx) => {
    const chat = await tx.chat.findUnique({
      where: { id: messageId },
    });
    if (chat) {
      console.log("message already saved");
      return;
    }
    //create a viewer if not exists
    const viewer = await tx.viewer.findFirst({
      where: {
        username,
        streamChatId: broadcastId,
        userChannelId: channelId,
        externalId: userId,
      },
    });
    if (!viewer) {
      await tx.viewer.create({
        data: {
          externalId: userId,
          userChannelId: channelId,
          username,
          streamChatId: broadcastId,
        },
      });
    }
    await tx.chat.create({
      data: {
        id: messageId,
        userId: channelId,
        broadcastId,
        username,
        chatType,
        message,
        timestamp,
      },
    });
  });
};
