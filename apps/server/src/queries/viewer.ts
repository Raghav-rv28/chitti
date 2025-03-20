import { prisma } from "@repo/database";

export const getViewerByUsername = async (username: string) => {
  return await prisma.viewer.findFirst({ where: { username } });
};
