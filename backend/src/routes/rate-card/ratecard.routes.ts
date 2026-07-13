import { Router } from "express";

import { authenticate } from "../../middleware/auth/auth.middleware";
import { authorize } from "../../middleware/auth/authorize.middleware";
import { validate } from "../../middleware/validate.middleware";

import { createRateCardSchema } from "../../services/rate-card/ratecard.validation";

import { createRateCardController } from "../../controllers/rate-card/rate-card.controller";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(createRateCardSchema),
  createRateCardController
);

export default router;