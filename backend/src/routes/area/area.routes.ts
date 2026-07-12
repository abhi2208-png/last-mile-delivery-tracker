import { Router } from "express";

import { authenticate } from "../../middleware/auth/auth.middleware";
import { authorize } from "../../middleware/auth/authorize.middleware";
import { validate } from "../../middleware/validate.middleware";

import { createAreaSchema } from "../../services/area/area.validation";
import { createAreaController } from "../../controllers/area/area.controller";

const router = Router();
console.log({
  authenticate: typeof authenticate,
  authorize: typeof authorize,
  validate: typeof validate,
  createAreaController: typeof createAreaController,
});

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(createAreaSchema),
  createAreaController
);

export default router;