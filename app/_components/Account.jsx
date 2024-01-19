import { Button } from "@/components/ui/button";
import { CreateAccount } from "@/lib/create";

export default async function Account(){
    const { balance } = await CreateAccount();

    return(
        <div className="py-20 px-6 md:px-20 lg:px-32 -mt-5">
            <div className="text-center">
                <h1 className="text-[50px] font-bold">{balance}<span className="text-2xl text-primary">Z</span></h1>
                <p className="text-xs -mt-4 text-center opacity-75">Total Balance</p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
                <Button>New Payment</Button>
                <Button variant="secondary">Request</Button>
            </div>
        </div>
    )
}