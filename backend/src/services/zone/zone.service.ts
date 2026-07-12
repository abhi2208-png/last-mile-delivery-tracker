import prisma from "../../lib/prisma";
import { CreateZoneInput } from "./zone.validation";
import { ApiError } from "../../utils/ApiError";

export const createZone = async (
  data: CreateZoneInput
) => {
  const existing = await prisma.zone.findUnique({
    where: {
      name: data.name,
    },
  });

  if (existing) {
    throw new ApiError(
409,
"Zone already exists"
)
  }

  const zone = await prisma.zone.create({
    data,
  });

  return {
    success: true,
    message: "Zone created successfully",
    zone,
  };
};