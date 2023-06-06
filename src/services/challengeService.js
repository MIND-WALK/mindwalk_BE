import { ChallengeModel } from "../db/index.js";

class LogService {
  challengeModel = new ChallengeModel();

  async createChallenge(challengeInfo) {
    const createdChallenge = await this.challengeModel.create(challengeInfo);

    return createdChallenge;
  }

  async findChallengesByUserId(userId) {
    const foundChallengeArray = await this.challengeModel.findAllByUserId(userId);

    if (foundChallengeArray.length < 1) return [];

    return foundChallengeArray;
  }

  async findChallenge(challengeId) {
    const foundChallenge = await this.challengeModel.findOne(challengeId);

    if (!foundChallenge) return [];
    else return foundChallenge;
  }
}

const logService = new LogService();

export default logService;
