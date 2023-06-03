import { Router } from "express";
import { emotionService } from "../services/index.js";

const emotionRouter = Router();

emotionRouter.post("/emotion/:userId", async(req, res, next) => {
    try {
        const { userId } = req.params;

        const emotion = await emotionService.createEmotion({...req.body, id: userId });
        res.status(201).send(emotion);
    } catch (err) {
        next(err);
    }
});

emotionRouter.get("/emotion/all/:userId", async(req, res, next) => {
    try {
        const { userId } = req.params;

        const emotions = await emotionService.findEmotionsByUserId(userId);

        res.status(200).send(emotions);
    } catch (err) {
        next(err);
    }
});

export default emotionRouter;