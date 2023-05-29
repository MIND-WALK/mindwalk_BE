import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../db";

class UserService {
  userModel = new UserModel();

  async addUser(userInfo) {
    const { id, password } = userInfo;

    const oldUser = await this.userModel.findById(id);

    if (oldUser) {
      throw new Error("409");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = { id, password: hashedPassword };
    const user = await this.userModel.create(newUserInfo);

    return user;
  }
}

const userService = new UserService();

export default userService;
