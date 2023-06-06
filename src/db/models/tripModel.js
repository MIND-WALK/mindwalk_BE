import { model } from "mongoose";
import TripSchema from "../schemas/tripSchema.js";
import ChallengeSchema from "../schemas/challengeSchema.js";
import EmotionSchema from "../schemas/emotionSchema.js";

class TripModel {
  Trip = model("Trip", TripSchema);
  Challenge = model("Challenge", ChallengeSchema);
  Emotion = model("Emotion", EmotionSchema);

  async findAllByUserId(userId) {
    const trips = await this.Emotion.find({ user: userId });
    const checked = await this.Challenge.find({ user: userId, checked: true });
    const dateList = [];
    checked.forEach(check => {
      dateList.push(check.date);
    });

    const tripList = await this.Trip.create({
      all: trips.count(),
      check: checked.count(),
      date: dateList,
      user: userId,
    });

    return tripList;
  }
}

export default TripModel;
