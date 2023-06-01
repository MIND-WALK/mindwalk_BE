import { Router } from "express";
import { logService } from "../services/index";

const logRouter = Router();

logRouter.post("/log/:userId", async(req, res, next) => {
    try {
        const { userId } = req.params;

        await logService.createLog({...req.body, author: userId });
        res.status(201).end();
    } catch (err) {
        next(err);
    }
});

logRouter.get("/log/all/:userId", async(req, res, next) => {
    try {
        const { userId } = req.params;

        const logs = await logService.findLogsByUserId(userId);

        res.status(200).send(logs);
    } catch (err) {
        next(err);
    }
});

logRouter.get("/log/:logId", async(req, res, next) => {
    try {
        const { logId } = req.params;

        const log = await logService.findLog(logId);

        res.status(200).send(log);
    } catch (err) {
        next(err);
    }
});

export default logRouter;