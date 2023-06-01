import { LogModel } from "../db";

class LogService {
  logModel = new LogModel();

  async createLog(logInfo) {
    const createdLog = await this.logModel.createLog(logInfo);

    return createdLog;
  }

  async findLogsByUserId(userId) {
    const foundLogArray = await this.logModel.findAllByUserId(userId);

    if (foundLogArray.length < 1) return [];

    return foundLogArray;
  }

  async findLog(logId) {
    const foundLog = await this.logModel.findOne(logId);

    if (!foundLog) throw new Error("해당 게시글을 찾을 수 없습니다.");

    return foundLog;
  }
}

const logService = new LogService();

export default logService;
