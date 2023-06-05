import { Router } from "express";
import { logService } from "../services/index.js";

const logRouter = Router();

logRouter.post("/log/:userId", async (req, res, next) => {
  // res.header("Access-Control-Allow-origin", "*");
  try {
    const { userId } = req.params;

    await logService.createLog({ ...req.body, author: userId });
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

logRouter.post("/log/update/:userId/:ms", async (req, res, next) => {
  const newLog = await logService.updateLog(req.params.userId, req.params.ms, req.body);

  res.status(201).send(newLog);
});

logRouter.get("/log/all/:userId", async (req, res, next) => {
  // res.header("Access-Control-Allow-origin", "*");
  try {
    const { userId } = req.params;

    const logs = await logService.findLogsByUserId(userId);

    res.status(200).send(logs);
  } catch (err) {
    next(err);
  }
});

logRouter.get("/log/:logId", async (req, res, next) => {
  // res.header("Access-Control-Allow-origin", "*");
  try {
    const { logId } = req.params;

    const log = await logService.findLog(logId);

    res.status(200).send(log);
  } catch (err) {
    next(err);
  }
});

export default logRouter;
