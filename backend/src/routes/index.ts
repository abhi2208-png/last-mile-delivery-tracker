import { Router } from "express";

import authRoutes from "./auth/auth.routes";
import zoneRoutes from "./zone/zone.routes";
import areaRoutes from "./area/area.routes";
import rateCardRoutes from "./rate-card/ratecard.routes";
import agentRoutes
from "./agent/agent.routes";
const router = Router();


router.use("/auth", authRoutes);

router.use("/zones", zoneRoutes);

router.use("/areas", areaRoutes);

router.use("/rate-cards", rateCardRoutes);

router.use(
"/agents",
agentRoutes
);
export default router;