import express from "express";
import cors from "cors";
import morgan from "morgan";

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

export default app;