/*
  Warnings:

  - A unique constraint covering the columns `[pickupZoneId,dropZoneId,orderType]` on the table `RateCard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RateCard_pickupZoneId_dropZoneId_orderType_key" ON "RateCard"("pickupZoneId", "dropZoneId", "orderType");
