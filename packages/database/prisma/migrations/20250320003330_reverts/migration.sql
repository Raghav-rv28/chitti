/*
  Warnings:

  - You are about to drop the column `streamLogsId` on the `Chat` table. All the data in the column will be lost.
  - Added the required column `messageId` to the `StreamLogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_streamLogsId_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "streamLogsId";

-- AlterTable
ALTER TABLE "StreamLogs" ADD COLUMN     "eventDetails" JSONB DEFAULT '{}',
ADD COLUMN     "messageId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "StreamLogs" ADD CONSTRAINT "StreamLogs_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
