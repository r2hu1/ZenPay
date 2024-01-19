import { Schema } from "mongoose";

export const TransSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    }
}, { timestamps: true });