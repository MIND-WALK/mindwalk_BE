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

  async findOne(logId) {
    const log = await this.Log.findOne({ _id: logId });

    return log;
  }
}

export default LogModel;
