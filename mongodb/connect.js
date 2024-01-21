"use server";
import { connect } from "mongoose";

export const connectToDb = async () => {
    try{
        connect(process.env.NEXT_MONGO_URI);
        // console.log("connected to mongodb");
    }
    catch(err){
        console.log(err);
    }
}