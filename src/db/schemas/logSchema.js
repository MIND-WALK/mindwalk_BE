import { Schema } from "mongoose";

const LogSchema = new Schema(
  {
    diary: { type: String, required: true },
    color: { type: String, required: true },
    score: { type: Number, required: true },
    date: {
      type: Number,
      required: true,
    },
    img: String,
    author: { type: String, required: true },
  },
  { timestamps: true },
);

export default LogSchema;
