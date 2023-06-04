import { RouteModel } from "../db/index.js";

class RouteService {
    routeModel = new RouteModel();

    async createRoute(routeInfo) {
        const createdRoute = await this.routeModel.createRoute(routeInfo);

        return createdRoute;
    }

    async findAllByCategory(categoryNum) {
        const foundRoutes = await this.routeModel.findAllByCategory(categoryNum);

        if (foundRoutes.length < 1) return [];

        return foundRoutes;
    }
}

const routeService = new RouteService();

export default routeService;