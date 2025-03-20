/*
  Warnings:

  - You are about to drop the column `viewerId` on the `StreamLogs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "StreamLogs" DROP CONSTRAINT "StreamLogs_viewerId_fkey";

-- AlterTable
ALTER TABLE "StreamLogs" DROP COLUMN "viewerId";
