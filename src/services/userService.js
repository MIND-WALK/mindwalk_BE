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

    async getUserToken(loginInfo) {
        const { id, password } = loginInfo;

        const user = await this.userModel.findById(id);

        if (!user) {
            throw new Error("해당 이메일은 가입 내역이 없습니다.");
        }

        const correctPasswordHash = user.password;

        const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash);

        if (!isPasswordCorrect) {
            throw new Error("비밀번호가 일치하지 않습니다. 다시 한 번 확인해주세요.");
        }

        const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
        const token = jwt.sign({ id }, secretKey);

        return { token };
    }
}

const userService = new UserService();

// eslint-disable-next-line prettier/prettier
export default userService;