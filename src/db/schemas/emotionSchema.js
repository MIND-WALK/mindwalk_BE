import { Schema } from "mongoose";

const EmotionSchema = new Schema({
    id: { type: String, required: true },
    emotion: { type: String, required: true },
    check: {
        type: Boolean,
        required: false,
        default: false,
    },
}, { timestamps: true }, );

export default EmotionSchema;