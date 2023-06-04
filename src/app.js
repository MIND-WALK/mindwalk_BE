import express from "express";
import bodyParser from "body-parser";
import { logRouter, userRouter, emotionRouter, routeRouter, challengeRouter } from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
// app.use(express.json());

app.use("/api", userRouter);
app.use("/api", logRouter);
app.use("/api", challengeRouter);
app.use("/api", emotionRouter);
app.use("/api", routeRouter);

// eslint-disable-next-line prettier/prettier
export default app;
