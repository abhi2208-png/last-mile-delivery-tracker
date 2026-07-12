import { z } from "zod";
import { Role } from "@prisma/client";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Invalid email"),

  password: z.string().min(8, "Password must be at least 8 characters"),

  phone: z.string().min(10).max(10),

  role: z.enum([Role.CUSTOMER, Role.AGENT]),
});

export type RegisterInput = z.infer<typeof registerSchema>;