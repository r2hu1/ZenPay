"use server"
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