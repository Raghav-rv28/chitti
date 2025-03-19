import { prisma } from "@repo/database";
export const getUserTopCommands = async (userId: string) => {
  const data = await prisma.streamLogs.findMany({
    where: {
      channelId: userId,
    },
  });
  const commandCount: Record<string, number> = {};
  data.forEach((log) => {
    try {
      const details = log.eventDetails as { command?: string };
      if (details.command) {
        commandCount[details.command] =
          (commandCount[details.command] || 0) + 1;
      }
    } catch (error) {
      console.error("Invalid eventDetails format:", log.eventDetails);
    }
  });
  const topCommands = Object.entries(commandCount)
    .map(([command, count]) => ({ command, count }))
    .sort((a, b) => b.count - a.count);
  return topCommands;
};

export const getTopViewers = async (userId: string) => {
  // get list of chat messages in last 7 days related to userId
  const data = await prisma.chat.findMany({
    where: {
      userId: userId,
      timestamp: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
    },
  });
  // get unique viewer ids and count messages from each viewer
  const viewerCount = data.reduce<Record<string, number>>((acc, message) => {
    if (message.viewerId) {
      acc[message.username] = (acc[message.username] || 0) + 1;
    }
    return acc;
  }, {});
  
  return viewerCount;
};
