import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { ApiResponse } from "../../utils/ApiResponse";
import { createArea } from "../../services/area/area.service";

export const createAreaController = asyncHandler(
  async (req: Request, res: Response) => {
    const area = await createArea(req.body);

    return res.status(201).json(
      new ApiResponse(
        201,
        area,
        "Area created successfully"
      )
    );
  }
);