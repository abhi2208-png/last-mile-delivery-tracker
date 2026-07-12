import { Request, Response } from "express";
import { createZoneSchema } from "../../services/zone/zone.validation";
import { createZone } from "../../services/zone/zone.service";

export const createZoneController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = createZoneSchema.parse(req.body);

    const result = await createZone(data);

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};