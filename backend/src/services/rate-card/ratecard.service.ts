import prisma from "../../lib/prisma";
import { ApiError } from "../../utils/ApiError";
import { CreateRateCardInput } from "./ratecard.validation";

export const createRateCard = async (
  data: CreateRateCardInput
) => {

  const pickupZone = await prisma.zone.findUnique({
    where: {
      id: data.pickupZoneId,
    },
  });

  if (!pickupZone) {
    throw new ApiError(
      404,
      "Pickup Zone not found"
    );
  }

  const dropZone = await prisma.zone.findUnique({
    where: {
      id: data.dropZoneId,
    },
  });

  if (!dropZone) {
    throw new ApiError(
      404,
      "Drop Zone not found"
    );
  }

  const existingRateCard =
    await prisma.rateCard.findFirst({

      where: {

        pickupZoneId: data.pickupZoneId,

        dropZoneId: data.dropZoneId,

        orderType: data.orderType,

      },

  });

  if (existingRateCard) {
    throw new ApiError(
      409,
      "Rate card already exists"
    );
  }

  const rateCard =
    await prisma.rateCard.create({

      data: {

        pickupZoneId: data.pickupZoneId,

        dropZoneId: data.dropZoneId,

        orderType: data.orderType,

        pricePerKg: data.pricePerKg,

        codCharge: data.codCharge,

      },

      include: {

        pickupZone: true,

        dropZone: true,

      },

  });

  return rateCard;
};