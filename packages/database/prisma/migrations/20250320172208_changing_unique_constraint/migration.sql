/*
  Warnings:

  - A unique constraint covering the columns `[userId,trigger]` on the table `CustomCommand` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CustomCommand_userId_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "CustomCommand_userId_trigger_key" ON "CustomCommand"("userId", "trigger");
