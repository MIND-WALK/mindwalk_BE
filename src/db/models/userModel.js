import { model } from "mongoose";
import UserSchema from "../schemas/userSchema.js";

class UserModel {
  User = model("User", UserSchema);

  async create(userInfo) {
    const aleady = await this.User.findOne({ id: userInfo.id });
    if (!aleady) {
      const user = await this.User.create(userInfo);
      return user;
    } else {
      return aleady;
    }
  }

  async findById(id) {
    const user = await this.User.findOne({ id });
    return user;
  }
}

export default UserModel;
