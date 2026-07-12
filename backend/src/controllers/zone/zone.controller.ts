import { asyncHandler } from "../../utils/asyncHandler";
import { ApiResponse } from "../../utils/ApiResponse";
import { createZone } from "../../services/zone/zone.service";

export const createZoneController =
asyncHandler(
async(req,res)=>{

const result = await createZone(req.body);

res
.status(201)
.json(
new ApiResponse(
201,
result,
"Zone Created Successfully"
)
);

}
);