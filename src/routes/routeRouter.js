import { Router } from "express";
import { routeService } from "../services/index.js";

const routeRouter = Router();

routeRouter.post("/route/info", async(req, res, next) => {
    try {
        res.setHeader("Access-Control-Allow-origin", "*");
        await routeService.createRoute({...req.body });
        res.status(201).end();
    } catch (err) {
        next(err);
    }
});

routeRouter.get("/route/all/:categoryNum", async(req, res, next) => {
    try {
        res.setHeader("Access-Control-Allow-origin", "*");
        const { categoryNum } = req.params;

        const routes = await routeService.findAllByCategory(categoryNum);

        res.status(200).send(routes);
    } catch (err) {
        next(err);
    }
});

export default routeRouter;