import prisma from "../../lib/prisma";
import { ApiError } from "../../utils/ApiError";
import { CreateAreaInput } from "./area.validation";

export const createArea = async (data: CreateAreaInput) => {
  const zone = await prisma.zone.findUnique({
    where: {
      id: data.zoneId,
    },
  });

  if (!zone) {
    throw new ApiError(404, "Zone not found");
  }

  const existingArea = await prisma.area.findUnique({
    where: {
      name: data.name,
    },
  });

  if (existingArea) {
    throw new ApiError(409, "Area already exists");
  }

  const area = await prisma.area.create({
    data,
    include: {
      zone: true,
    },
  });

  return area;
};