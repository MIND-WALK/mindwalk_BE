import { Router } from "express";
import { userService } from "../services/index.js";

const userRouter = Router();

userRouter.post("/join", async(req, res, next) => {
    try {
        res.setHeader("Access-Control-Allow-origin", "*");
        await userService.addUser(req.body);
        res.status(201).end();
    } catch (err) {
        next(err);
    }
});

userRouter.post("/login", async(req, res, next) => {
    try {
        res.setHeader("Access-Control-Allow-origin", "*");
        const result = await userService.getUserToken(req.body);
        res.status(201).json({...result, id: req.body.id });
    } catch (err) {
        next(err);
    }
});

export default userRouter;