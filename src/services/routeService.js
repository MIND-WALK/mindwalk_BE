import { RouteModel } from "../db";

class RouteService {
    routeModel = new RouteModel();

    async createRoute(routeInfo) {
        const createdLog = await this.routeModel.createRoute(routeInfo);

        return createdLog;
    }

    async findAllByCategory(categoryNum) {
        const foundRoutes = await this.routeModel.findAllByCategory(categoryNum);

        if (foundLogArray.length < 1) return [];

        return foundRoutes;
    }
}

const routeService = new RouteService();

export default routeService;