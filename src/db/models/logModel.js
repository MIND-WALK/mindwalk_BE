import { model } from "mongoose";
import LogSchema from "../schemas/logSchema.js";

class LogModel {
  Log = model("Log", LogSchema);

  async createLog(logInfo) {
    await this.Log.create(logInfo);
  }

  async findAllByUserId(userId) {
    const logs = await this.Log.find({ author: userId });

    return logs;
  }

  async findOne(userId, ms) {
    const log = await this.Log.findOne({ author: userId, date: ms });

    return log;
  }

  async update(userId, ms, update) {
    const log = await this.Log.updateOne({ author: userId, date: ms }, update);

    return log;
  }
}

export default LogModel;
