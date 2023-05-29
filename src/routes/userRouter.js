import { Router } from "express";
import { userService } from "../services/index";

const userRouter = Router();

userRouter.post("/join", async (req, res, next) => {
  try {
    await userService.addUser(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default userRouter;
