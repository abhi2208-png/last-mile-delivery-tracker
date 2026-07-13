/*
  Warnings:

  - You are about to drop the column `userId` on the `TrackingHistory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TrackingHistory" DROP CONSTRAINT "TrackingHistory_userId_fkey";

-- AlterTable
ALTER TABLE "TrackingHistory" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "assignedZoneId" TEXT,
ADD COLUMN     "currentLatitude" DOUBLE PRECISION,
ADD COLUMN     "currentLongitude" DOUBLE PRECISION,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_assignedZoneId_fkey" FOREIGN KEY ("assignedZoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;
