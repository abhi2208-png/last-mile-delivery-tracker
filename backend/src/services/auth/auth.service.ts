import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { RegisterInput } from "./auth.validation";
import { generateToken } from "../../utils/jwt";

export const registerUser = async (data: RegisterInput) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      role: data.role,
    },
  });

  const token = generateToken(user.id, user.role);

  return {
    success: true,
    message: "User registered successfully",
    token,
    user,
  };
};