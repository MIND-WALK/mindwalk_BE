import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    id: String,
    password: String,
  },
  { timestamps: true },
);

export default UserSchema;
