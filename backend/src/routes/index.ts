import { Router } from "express";

import authRoutes from "./auth/auth.routes";
import zoneRoutes from "./zone/zone.routes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/zones", zoneRoutes);

export default router;