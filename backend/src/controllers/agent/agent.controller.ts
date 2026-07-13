import { asyncHandler }
from "../../utils/asyncHandler";

import { ApiResponse }
from "../../utils/ApiResponse";

import {
createAgent
}
from "../../services/agent/agent.service";

export const createAgentController =
asyncHandler(

async(req,res)=>{

const agent =
await createAgent(req.body);

res
.status(201)
.json(

new ApiResponse(

201,

agent,

"Agent created successfully"

)

);

}

);