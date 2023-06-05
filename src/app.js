import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  logRouter,
  userRouter,
  emotionRouter,
  routeRouter,
  challengeRouter,
} from "./routes/index.js";

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
// app.use(express.json());
app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
});
app.use("/api", userRouter);
app.use("/api", logRouter);
app.use("/api", challengeRouter);
app.use("/api", emotionRouter);
app.use("/api", routeRouter);

// eslint-disable-next-line prettier/prettier
export default app;
