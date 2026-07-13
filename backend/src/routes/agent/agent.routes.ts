import { Router } from "express";

import { authenticate }
from "../../middleware/auth/auth.middleware";

import { authorize }
from "../../middleware/auth/authorize.middleware";

import { validate }
from "../../middleware/validate.middleware";

import {
createAgentSchema
}
from "../../services/agent/agent.validation";

import {
createAgentController
}
from "../../controllers/agent/agent.controller";

const router = Router();

router.post(

"/",

authenticate,

authorize("ADMIN"),

validate(createAgentSchema),

createAgentController

);

export default router;