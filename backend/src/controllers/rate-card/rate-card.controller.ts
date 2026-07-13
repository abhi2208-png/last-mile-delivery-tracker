import { asyncHandler } from "../../utils/asyncHandler";
import { ApiResponse } from "../../utils/ApiResponse";
import { createRateCard } from "../../services/rate-card/ratecard.service";

export const createRateCardController = asyncHandler(
  async (req, res) => {

    const rateCard = await createRateCard(req.body);

    res.status(201).json(
      new ApiResponse(
        201,
        rateCard,
        "Rate Card created successfully"
      )
    );

  }
);