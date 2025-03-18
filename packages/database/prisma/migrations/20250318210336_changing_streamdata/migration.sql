-- AlterTable
ALTER TABLE "CustomCommand" ALTER COLUMN "cooldown" SET DEFAULT 0,
ALTER COLUMN "description" SET DEFAULT 'some description';

-- AlterTable
ALTER TABLE "StreamChat" ADD COLUMN     "contentDetails" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "totalDonations" SET DEFAULT 0,
ALTER COLUMN "totalViews" SET DEFAULT 0;
