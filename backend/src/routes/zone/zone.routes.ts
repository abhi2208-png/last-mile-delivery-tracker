import { Router } from "express";

import { authenticate } from "../../middleware/auth/auth.middleware";
import { authorize } from "../../middleware/auth/authorize.middleware";
import { validate } from "../../middleware/validate.middleware";

import { createZoneController } from "../../controllers/zone/zone.controller";
import { createZoneSchema } from "../../services/zone/zone.validation";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(createZoneSchema),
  createZoneController
);

export default router;