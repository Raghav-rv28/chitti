import { Chat, prisma, StreamChat } from "@repo/database";

export const getStreams = async (userId: string): Promise<StreamChat[]> => {
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

export const fetchChatMessages = async (streamId: string): Promise<Chat[]> => {
  try {
    const chatMessages = await prisma.chat.findMany({
      where: { broadcastId: streamId },
    });
    return chatMessages;
  } catch (error) {
    console.error("Failed to fetch chat messages", error);
    return [];
  }
};
