import express from "express";
import bodyParser from "body-parser";
import {
  logRouter,
  userRouter,
  emotionRouter,
  routeRouter,
  challengeRouter,
  tripRouter,
} from "./routes/index.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
// app.use((req, res) => {
//   res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
// });
app.use("/api", userRouter);
app.use("/api", logRouter);
app.use("/api", challengeRouter);
app.use("/api", emotionRouter);
app.use("/api", routeRouter);
app.use("/api", tripRouter);

// eslint-disable-next-line prettier/prettier
export default app;
