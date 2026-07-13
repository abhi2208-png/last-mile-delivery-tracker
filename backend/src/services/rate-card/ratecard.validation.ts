import { z } from "zod";
import { OrderType } from "@prisma/client";

export const createRateCardSchema = z.object({

    pickupZoneId: z.string(),

    dropZoneId: z.string(),

    orderType: z.enum([
        OrderType.B2B,
        OrderType.B2C
    ]),

    pricePerKg: z.number().positive(),

    codCharge: z.number().min(0)

});

export type CreateRateCardInput =
z.infer<typeof createRateCardSchema>;