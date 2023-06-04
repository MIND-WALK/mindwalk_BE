import { ChallengeModel } from "../db";

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

    if (!foundChallenge) throw new Error("해당 게시글을 찾을 수 없습니다.");

    return foundChallenge;
  }
}

const logService = new LogService();

export default logService;
