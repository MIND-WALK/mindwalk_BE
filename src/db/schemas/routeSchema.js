import { Schema } from "mongoose";

//번호 감정 장소 위도 경도 소요시간 거리

const RouteSchema = new Schema({
    category: { type: Number, required: true },
    emotion: { type: String, required: true },
    location: { type: String, required: true },
    lat: { type: Number, required: false },
    long: { type: Number, required: false },
    time: { type: String, required: true },
    distance: { type: String, required: true },
}, { timestamps: true }, );

export default RouteSchema;