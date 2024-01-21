"use server";
import { connectToDb } from "@/mongodb/connect";
import { Trans } from "@/models/trans";

export const deleteTrans = async (id) => {
    await connectToDb();
    return await Trans.deleteOne({ _id: id });
}