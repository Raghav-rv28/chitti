import { prisma, StreamLogs } from "@repo/database";
//TODO: change static values cooldown and requiredUserLevel
export const createCommand = async (
  userId: string,
  trigger: string,
  response: string,
) => {
  if (!trigger.startsWith("!")) {
    throw new Error("Commands must start with '!'");
  }

  return await prisma.customCommand.create({
    data: {
      userId,
      trigger: trigger.toLowerCase(), // Ensure case insensitivity
      response,
      cooldown: 0,
      requiredUserLevel: "viewer",
    },
  });
};

export const getCommand = async (userId: string, command: string) => {
  return await prisma.customCommand.findFirst({
    where: { trigger: `!${command}`, userId },
  });
};

export const deleteCommand = async (userId: string, trigger: string) => {
  const command = await prisma.customCommand.findFirst({
    where: { trigger: trigger.toLowerCase(), userId },
  });

  if (!command) {
    throw new Error("Command not found.");
  }

  if (command.userId !== userId) {
    throw new Error("You can only delete your own commands.");
  }

  await prisma.customCommand.delete({
    where: { trigger: trigger.toLowerCase(), userId, id: command.id },
  });

  return "Command deleted successfully.";
};

export const updateCommand = async (
  userId: string,
  trigger: string,
  newResponse: string,
) => {
  const command = await prisma.customCommand.findFirst({
    where: { trigger: trigger.toLowerCase(), userId },
  });

  if (!command) {
    throw new Error("Command not found.");
  }

  if (command.userId !== userId) {
    throw new Error("You can only update your own commands.");
  }

  await prisma.customCommand.update({
    where: { trigger: trigger.toLowerCase(), userId, id: command.id },
    data: { response: newResponse },
  });

  return "Command updated successfully.";
};

export async function logCommandDetails(
  channelId: string,
  viewerId: string,
  broadcastId: string,
  command: string,
  response: string | undefined,
  hasPermission: boolean,
  args: string[],
  messageDetails: any,
  messageId: string,
  timeoutDetails?: { durationSeconds: number; message: string } | null,
) {
  console.log(messageId);
  await prisma.streamLogs.create({
    data: {
      channelId,
      broadcastId,
      messageId,
      messageDetails,
      eventType: "command", // Assuming you have an enum for event types
      eventDetails: {
        command,
        response,
        caller: viewerId,
        hasPermission,
        args,
        timeoutDetails,
      },
    },
  });
}

export async function getStreamLogs(
  messageId: string,
  channelId: string,
  broadcastId: string,
): Promise<StreamLogs[]> {
  return await prisma.streamLogs.findMany({
    where: {
      messageId,
      channelId,
      broadcastId,
    },
  });
}
