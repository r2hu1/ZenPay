import { getHist } from "@/lib/create"
import { currentUser } from "@clerk/nextjs";

export default async function Trans() {
    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress.split("@")[0] + "@zpi";
    const trans = await getHist();

    return (
        <div className="grid gap-3 mt-20">
            <h1 className="text-lg font-bold">Transactions</h1>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full flex items-center justify-between h-fit md:max-w-sm py-4 px-5 bg-background rounded-md border">
                    <h1 className="text-md">250<span className="text-xs text-primary">Z</span> from r2hu1</h1>
                </div>
                {trans.map((item, index) => (
                    <div key={index} className="w-full flex items-center justify-between h-fit md:max-w-sm py-4 px-5 bg-background rounded-md border">
                        {item.from != email ? (
                            <h1 className="text-md">{item.amount}<span className="text-xs text-primary">Z</span> from {item.from}</h1>
                        ) : (
                            <h1 className="text-md">{item.amount}<span className="text-xs text-primary">Z</span> to {item.to}</h1>
                        )}
                        {/* <span>{item}</span> */}
                    </div>
                ))}
            </div>
        </div>
    )
}