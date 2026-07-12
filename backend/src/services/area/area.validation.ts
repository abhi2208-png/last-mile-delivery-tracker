import { z } from "zod";

export const createAreaSchema = z.object({
  name: z
    .string()
    .min(2, "Area name must be at least 2 characters")
    .max(100),

  zoneId: z.string().min(1, "Zone is required"),
});

export type CreateAreaInput = z.infer<typeof createAreaSchema>;