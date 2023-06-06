import { Router } from "express";
import { tripService } from "../services/index.js";

const tripRouter = Router();

tripRouter.get("/user/trip/all/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    const trips = await tripService.findAllByUserId(userId);

    res.status(200).send(trips);
  } catch (err) {
    next(err);
  }
});

export default tripRouter;
