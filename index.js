import "dotenv/config";
import mongoose from "mongoose";
import app from "./src/app";

const PORT = process.env.SERVER_PORT || 5000;
const DB_URL = process.env.MONGODB_URL || "MongoDB 서버 주소가 설정되지 않았습니다.";
const uri =
    "mongodb+srv://mindwalk:mindwalk2023@cluster0.xcurfm0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);
const db = mongoose.connection;

db.on("connected", async() => {
    console.log(`정상적으로 MongoDB 서버에 연결되었습니다.  ${uri}`);
});

db.on("error", error => console.error(`\nMongoDB 연결에 실패하였습니다...\n${DB_URL}\n${error}`));

app.listen(PORT, () => {
    console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});