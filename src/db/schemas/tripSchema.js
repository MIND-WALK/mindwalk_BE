import { Schema } from "mongoose";

const TripSchema = new Schema({
    all: { type: Object },
    check: { type: Object },
    user: { type: String, required: true },
}, { timestamps: true }, );

export default TripSchema;