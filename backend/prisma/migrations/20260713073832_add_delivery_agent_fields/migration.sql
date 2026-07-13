/*
  Warnings:

  - You are about to drop the column `charge` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `TrackingHistory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,zoneId]` on the table `Area` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderNumber]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dropAreaId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderNumber` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupAreaId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalCharge` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Area_name_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "charge",
ADD COLUMN     "dropAreaId" TEXT NOT NULL,
ADD COLUMN     "orderNumber" TEXT NOT NULL,
ADD COLUMN     "pickupAreaId" TEXT NOT NULL,
ADD COLUMN     "remarks" TEXT,
ADD COLUMN     "totalCharge" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "TrackingHistory" DROP COLUMN "updatedBy",
ADD COLUMN     "updatedById" TEXT,
ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE INDEX "Area_zoneId_idx" ON "Area"("zoneId");

-- CreateIndex
CREATE UNIQUE INDEX "Area_name_zoneId_key" ON "Area"("name", "zoneId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE INDEX "RateCard_pickupZoneId_idx" ON "RateCard"("pickupZoneId");

-- CreateIndex
CREATE INDEX "RateCard_dropZoneId_idx" ON "RateCard"("dropZoneId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_pickupAreaId_fkey" FOREIGN KEY ("pickupAreaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_dropAreaId_fkey" FOREIGN KEY ("dropAreaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackingHistory" ADD CONSTRAINT "TrackingHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
