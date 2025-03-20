"use server";

import { prisma, User } from "@repo/database";

export const getUserInfo = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email } });
};

export const getStreamLogs = async (broadcastId: string) => {
  return await prisma.streamLogs.findMany({ where: { broadcastId } });
};
