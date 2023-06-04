import { model } from "mongoose";
import TripSchema from "../schemas/tripSchema.js";

class TripModel {
    Trip = model("Trip", TripSchema);

    async findAllByUserId(userId) {
        const trips = await this.Trip.find({ user: userId });
        const checked = trips.then(checkedTrip => {
            this.checkedTrip.find({ check: true });
        });

        const tripList = await this.Trip.create({
            all: trips,
            check: checked,
            user: { type: String, required: true },
        });

        return tripList;
    }
}

export default TripModel;