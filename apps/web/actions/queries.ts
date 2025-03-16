"use server";

import { prisma } from "@repo/database";

export const getUserInfo = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

