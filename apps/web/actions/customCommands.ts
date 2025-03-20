"use server";

import { CommandReturned } from "@/app/(dashboard)/commands/types";
import { prisma } from "@repo/database";

export const createCustomCommand = async (
  userId: string,
  command: CommandReturned,
) => {
  if (!command.trigger.startsWith("!")) {
    throw new Error("Commands must start with '!'");
  }
  return await prisma.customCommand.create({
    data: {
      userId,
      trigger: command.trigger.toLowerCase(),
      response: command.response,
      requiredUserLevel: command.requiredUserLevel,
      cooldown: command.cooldown,
    },
  });
};

export const getCustomCommands = async (userId: string, command: string) => {
  return await prisma.customCommand.findFirst({
    where: { trigger: `!${command}`, userId },
  });
};

export const getCommands = async (userId: string) => {
  return await prisma.customCommand.findMany({ where: { userId } });
};

export const deleteCustomCommand = async (userId: string, trigger: string) => {
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

export const updateCustomCommand = async (
  userId: string,
  trigger: string,
  newResponse: string,
) => {
  const command = await prisma.customCommand.findFirst({
    where: { trigger: trigger.toLowerCase() },
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

export const saveNewCommand = async (
  command: CommandReturned,
  userId: string,
) => {
  return await prisma.customCommand.create({
    data: {
      trigger: command.trigger,
      response: command.response,
      requiredUserLevel: command.requiredUserLevel,
      userId,
      cooldown: command.cooldown || 0,
    },
  });
};

export const updateCommand = async (updatedCommand: CommandReturned) => {
  return await prisma.customCommand.update({
    where: { id: updatedCommand.id },
    data: updatedCommand,
  });
};

export const deleteCommand = async (id: string) => {
  return await prisma.customCommand.delete({
    where: { id },
  });
};
