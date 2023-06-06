import { LogModel } from "../db/index.js";

class LogService {
  logModel = new LogModel();

  async createLog(logInfo) {
    const createdLog = await this.logModel.createLog(logInfo);

    return createdLog;
  }

  async updateLog(userId, ms, update) {
    const updatedLog = await this.logModel.update(userId, ms, update);

    return updatedLog;
  }

  async deleteLog(userId, ms) {
    const deleteLog = await this.logModel.delete(userId, ms);

    return deleteLog;
  }

  async findLogsByUserId(userId) {
    const foundLogArray = await this.logModel.findAllByUserId(userId);

    if (foundLogArray.length < 1) return [];

    return foundLogArray;
  }

  async findLog(logId, ms) {
    const foundLog = await this.logModel.findOne(logId, ms);

    if (!foundLog) return [];
    else return foundLog;
  }
}

const logService = new LogService();

export default logService;
