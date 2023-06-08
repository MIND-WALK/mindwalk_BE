import { Router } from "express";
import { challengeService } from "../services/index.js";

const challengeRouter = Router();

challengeRouter.post("/user/challenge/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    const { name, img, check, date, distance, emotion, emotionTime } = req.body;

    await challengeService.createChallenge({
      name: name,
      img: img,
      check: check,
      user: userId,
      date: date,
      distance: distance,
      emotion: emotion,
      emotionTime: emotionTime,
    });
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

challengeRouter.get("/user/trip/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    const challenges = await challengeService.findChallengesByUserId(userId);

    res.status(200).send(challenges);
  } catch (err) {
    next(err);
  }
});

export default challengeRouter;
