import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Last Mile Delivery API Running",
  });
});

/*
    API Routes
*/
app.use("/api/v1", routes);




app.use(errorHandler);

export default app;

