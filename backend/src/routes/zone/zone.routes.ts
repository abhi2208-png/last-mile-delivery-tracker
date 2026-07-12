import { Router } from "express";

import { authenticate } from "../../middleware/auth/auth.middleware";
import { authorize } from "../../middleware/auth/authorize.middleware";

import { createZoneController } from "../../controllers/zone/zone.controller";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createZoneController
);

export default router;