import express from "express";
import { logRouter, userRouter } from "./routes";

const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", logRouter);

export default app;
