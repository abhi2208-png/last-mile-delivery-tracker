import { z } from "zod";

export const createAgentSchema = z.object({

    name: z.string().min(3),

    email: z.string().email(),

    password: z.string().min(8),

    phone: z.string().length(10),

    assignedZoneId: z.string()

});

export type CreateAgentInput =
z.infer<typeof createAgentSchema>;