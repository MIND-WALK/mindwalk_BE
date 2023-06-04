import { Schema } from "mongoose";

const NameSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true },
);
const LocationSchema = new Schema(
  {
    location: String,
  },
  { timestamps: true },
);
const CheckSchema = new Schema(
  {
    check: Boolean,
  },
  { timestamps: true },
);

const ChallengeSchema = new Schema(
  {
    name: NameSchema,
    location: LocationSchema,
    check: CheckSchema,
    user: { type: String, required: true },
    date: String,
  },
  { timestamps: true },
);

export default ChallengeSchema;
