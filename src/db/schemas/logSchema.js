import { Schema } from "mongoose";

const LogSchema = new Schema(
  {
    id: String,
    password: String,
  },
  { timestamps: true },
);

export default LogSchema;
