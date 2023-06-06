import { Schema } from "mongoose";

const TripSchema = new Schema(
  {
    all: { type: Number, required: true },
    check: { type: Number, required: true },
    date: { type: Array, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true },
);

export default TripSchema;
