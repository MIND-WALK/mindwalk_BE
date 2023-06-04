import { Router } from "express";
import { challengeService } from "../services/index.js";

const challengeRouter = Router();

challengeRouter.post("/user/challenge/:userId/:date", async(req, res, next) => {
    try {
        res.setHeader("Access-Control-Allow-origin", "*");
        const { userId, date } = req.params;

        const { name, location, check } = req.body;

        await challengeService.createChallenge({
            name: { name },
            location: { location },
            check: { check },
            user: userId,
            date,
        });
        res.status(201).end();
    } catch (err) {
        next(err);
    }
});

challengeRouter.get("/user/trip/:userId", async(req, res, next) => {
    try {
        res.setHeader("Access-Control-Allow-origin", "*");
        const { userId } = req.params;

        const challenges = await challengeService.findChallengesByUserId(userId);

        res.status(200).send(challenges);
    } catch (err) {
        next(err);
    }
});

export default challengeRouter;