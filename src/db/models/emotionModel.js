import { model } from "mongoose";
import EmotionSchema from "../schemas/emotionSchema";

class EmotionModel {
    Emotion = model("Emotion", EmotionSchema);

    async createEmotion(userInfo) {
        const emotion = await this.Emotion.create(userInfo);
        return emotion;
    }

    async findAllByUserId(userId) {
        const emotions = await this.Emotion.find({ id: userId });

        return emotions;
    }
}

export default EmotionModel;