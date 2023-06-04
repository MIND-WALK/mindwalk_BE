import { model } from "mongoose";
import RouteSchema from "../schemas/routeSchema.js";

class RouteModel {
    Route = model("Route", RouteSchema);

    async createRoute(logInfo) {
        await this.Route.create(logInfo);
    }

    async findAllByCategory(categoryNum) {
        const routes = await this.Route.find({ category: categoryNum });

        return routes;
    }
}

export default RouteModel;