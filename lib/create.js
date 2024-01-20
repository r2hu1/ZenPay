"use server"
import { Trans } from "@/models/trans";
import { User } from "@/models/user";
import { connectToDb } from "@/mongodb/connect";
import { disconnectFromDb } from "@/mongodb/disconnect";
import { currentUser } from "@clerk/nextjs";

export const CreateAccount = async () => {

    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress;
    const zpi = email.split("@")[0] + "@zpi";

    await connectToDb();
    const findAcc = await User.findOne({ email });
    if (findAcc) {
        return { email: findAcc.email, zpi: findAcc.zpi, balance: findAcc.balance };
    }
    else {
        try {
            const account = await User.create({ email, zpi, balance: 250 });
            return { email: account.email, zpi: account.zpi, balance: account.balance };
        }
        catch (err) {
            return { email: null, zpi: null, balance: null };
        }
    }
}

export const makeTrans = async (zpi, amount) => {
    const curruser = await currentUser();
    const email = curruser.emailAddresses[0].emailAddress;

    await connectToDb();
    const user = await User.findOne({ zpi });
    const fromUser = await User.findOne({ email });
    const amountT = parseInt(amount);
    if (fromUser.balance < amount) {
        return { error: "insufficient balance" };
    }
    else if (fromUser.zpi == zpi) {
        return { error: "cannot pay yourself" };
    }
    try {
        if (!user) {
            return { error: "invalid zpi id" };
        }
        else {
            await createHist(amountT, fromUser.zpi, user.zpi);
            user.balance = user.balance + amountT;
            await user.save();
            fromUser.balance = fromUser.balance - amountT;
            await fromUser.save();
            return { success: true };
        }
    }
    catch (err) {
        console.log(err);
        return { error: err };
    }
};

export const createHist = async (amount, from, to) => {
    await connectToDb();
    try {
        await Trans.create({ amount, from, to });
        return { success: true };
    }
    catch (err) {
        return { error: err };
    }
}

export const getHist = async () => {
    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress;
    const { zpi } = await User.findOne({ email });
    await connectToDb();
    return await Trans.find({ to:zpi });
}

export const getFromHist = async () => {
    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress;
    const { zpi } = await User.findOne({ email });
    await connectToDb();
    return await Trans.find({ from:zpi });
}