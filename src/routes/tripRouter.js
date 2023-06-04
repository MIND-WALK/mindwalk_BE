import { Router } from "express";
import { TripService } from "../services/index.js";

const tripRouter = Router();

tripRouter.get("/user/trip/all/:userId", async(req, res, next) => {
    try {
        res.setHeader("Access-Control-Allow-origin", "*");
        const { userId } = req.params;

        const trips = await TripService.findAllByUserId(userId);

        res.status(200).send(trips);
    } catch (err) {
        next(err);
    }
});

export default tripRouter;