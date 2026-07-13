import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { ApiError } from "../../utils/ApiError";
import { CreateAgentInput } from "./agent.validation";
import { Role } from "@prisma/client";

export const createAgent = async (data: CreateAgentInput) => {
  // Check if email already exists
  const existing = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existing) {
    throw new ApiError(409, "Email already exists");
  }

  // Check if zone exists
  const zone = await prisma.zone.findUnique({
    where: {
      id: data.assignedZoneId,
    },
  });

  if (!zone) {
    throw new ApiError(404, "Zone not found");
  }

  // Hash password
  const hashed = await bcrypt.hash(data.password, 10);

  // Create agent
  const agent = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashed,
      phone: data.phone,
      role: Role.AGENT,
      assignedZoneId: data.assignedZoneId,
      isAvailable: true,
    },
  });

  return agent;
};