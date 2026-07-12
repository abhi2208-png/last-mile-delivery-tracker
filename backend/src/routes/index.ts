import { Router } from "express";

import authRoutes from "./auth/auth.routes";
import zoneRoutes from "./zone/zone.routes";
import areaRoutes from "./area/area.routes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/zones", zoneRoutes);

router.use("/areas", areaRoutes);

export default router;