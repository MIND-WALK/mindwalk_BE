import { Schema } from "mongoose";

const RouteSchema = new Schema(
  {
    emotion: { type: String, required: true },
    location: { type: String, required: true },
    lat: { type: Number, required: false },
    long: { type: Number, required: false },
  },
  { timestamps: true },
);

export default RouteSchema;
