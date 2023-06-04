import { TripModel } from "../db/index.js";

class TripService {
    tripModel = new TripModel();

    async findAllByUserId(userId) {
        const foundTrips = await this.tripModel.findAllByUserId(userId);

        if (foundTrips.length < 1) return [];

        return foundTrips;
    }
}

const tripService = new TripService();

export default tripService;