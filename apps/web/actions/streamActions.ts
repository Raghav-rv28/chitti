import { prisma } from "@repo/database";

export const getStreams = async (userId: string) => {
  try {
    const streams = await prisma.streamChat.findMany({
      where: { userId: userId },
    });
    return streams;
  } catch (error) {
    console.error("Failed to fetch streams", error);
    return [];
  }
};

export const fetchChatMessages = async (streamId: string) => {
  try {
    const chatMessages = await prisma.chat.findMany({
      where: { liveChatId: streamId },
    });
    return chatMessages;
  } catch (error) {
    console.error("Failed to fetch chat messages", error);
    return [];
  }
};
