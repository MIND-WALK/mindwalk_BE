import express from "express";
import { challengeRouter, logRouter, userRouter } from "./routes";

const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", logRouter);
app.use("/api", challengeRouter);

export default app;
