import { model } from "mongoose";
import ChallengeSchema from "../schemas/challengeSchema";

class ChallengeModel {
  Challenge = model("Challenge", ChallengeSchema);

  async create(challengeInfo) {
    console.log(challengeInfo);
    await this.Challenge.create(challengeInfo);
  }

  async findAllByUserId(userId) {
    const challenges = await this.Challenge.find({ user: userId });

    return challenges;
  }

  async findOne(challengeId) {
    const challenge = await this.Challenge.findOne({ _id: challengeId });

    return challenge;
  }
}

export default ChallengeModel;
