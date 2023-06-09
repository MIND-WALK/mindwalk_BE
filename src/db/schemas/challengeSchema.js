import { Schema } from "mongoose";

const ChallengeSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    check: { type: Boolean, required: true },
    user: { type: String, required: true },
    date: { type: String, required: true },
    emotion: { type: String, required: true },
    emotionTime: { type: String, required: true },
    distance: { type: String, required: true },
  },
  { timestamps: true },
);

export default ChallengeSchema;
