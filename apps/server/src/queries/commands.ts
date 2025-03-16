import { prisma } from "@repo/database";
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

export const getCommands = async (userId: string, command: string) => {
  return await prisma.customCommand.findUnique({
    where: { trigger: `!${command}`, userId },
  });
};

export const deleteCommand = async (userId: string, trigger: string) => {
  const command = await prisma.customCommand.findUnique({
    where: { trigger: trigger.toLowerCase() },
  });

  if (!command) {
    throw new Error("Command not found.");
  }

  if (command.userId !== userId) {
    throw new Error("You can only delete your own commands.");
  }

  await prisma.customCommand.delete({
    where: { trigger: trigger.toLowerCase(), userId },
  });

  return "Command deleted successfully.";
};

export const updateCommand = async (
  userId: string,
  trigger: string,
  newResponse: string,
) => {
  const command = await prisma.customCommand.findUnique({
    where: { trigger: trigger.toLowerCase() },
  });

  if (!command) {
    throw new Error("Command not found.");
  }

  if (command.userId !== userId) {
    throw new Error("You can only update your own commands.");
  }

  await prisma.customCommand.update({
    where: { trigger: trigger.toLowerCase(), userId },
    data: { response: newResponse },
  });

  return "Command updated successfully.";
};
