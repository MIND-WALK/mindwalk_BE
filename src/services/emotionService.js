import { EmotionModel } from "../db/index.js";

class EmotionService {
  emotionModel = new EmotionModel();

  async createEmotion(emotionInfo) {
    const createEmotion = await this.emotionModel.createEmotion(emotionInfo);

    return createEmotion;
  }

  async findEmotionsByUserId(userId) {
    const foundEmotionArray = await this.emotionModel.findAllByUserId(userId);

    if (foundEmotionArray.length < 1) return [];

    return foundEmotionArray;
  }
}

const emotionService = new EmotionService();

export default emotionService;
