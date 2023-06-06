import { Router } from "express";
import { logService } from "../services/index.js";

const logRouter = Router();

logRouter.post("/log/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    await logService.createLog({ ...req.body, author: userId });
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

logRouter.post("/log/update/:userId/:ms", async (req, res, next) => {
  await logService.updateLog(req.params.userId, req.params.ms, req.body);

  res.status(201).end();
});

logRouter.get("/log/all/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    const logs = await logService.findLogsByUserId(userId);

    res.status(200).send(logs);
  } catch (err) {
    next(err);
  }
});

logRouter.get("/log/:logId/:date", async (req, res, next) => {
  try {
    const { logId, date } = req.params;

    const log = await logService.findLog(logId, date);

    res.status(200).send(log);
  } catch (err) {
    next(err);
  }
});

logRouter.delete("/log/delete", async (req, res, next) => {
  try {
    const log = await logService.deleteLog(req.body.author, req.body.date);

    res.status(200).send(log);
  } catch (err) {
    next(err);
  }
});

export default logRouter;
