import { model } from "mongoose";
import LogSchema from "../schemas/logSchema";

class LogModel {
  Log = model("Log", LogSchema);
}

export default LogModel;
