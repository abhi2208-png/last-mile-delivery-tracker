import { z } from "zod";

export const createZoneSchema = z.object({
  name: z
    .string()
    .min(2, "Zone name must be at least 2 characters")
    .max(50),
});

export type CreateZoneInput = z.infer<
  typeof createZoneSchema
>;