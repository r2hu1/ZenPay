import { getFromHist, getHist } from "@/lib/create"
import { currentUser } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default async function Trans() {
    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress.split("@")[0] + "@zpi";
    const trans = await getHist();
    const fromTrans = await getFromHist();

    return (
        <div className="grid gap-3 mt-20">
            <h1 className="text-lg font-bold -mb-2">Transactions<span className="text-primary">.</span></h1>
            <Tabs defaultValue="received" className="w-full">
                <TabsList className="mb-7 flex items-center md:justify-start md:w-fit justify-center">
                    <TabsTrigger value="sent" className="md:w-[150px] w-full">Sent</TabsTrigger>
                    <TabsTrigger value="received" className="md:w-[170px] w-full">Received</TabsTrigger>
                </TabsList>
                <TabsContent value="sent">
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {fromTrans.map((item, index) => (
                            <div key={index} className="w-full flex items-center justify-between h-fit md:max-w-md py-4 px-5 bg-background rounded-md border">
                                {item.from != email ? (
                                    <h1 className="text-md">{item.amount}<span className="text-xs text-primary">Z</span> from {item.from}</h1>
                                ) : (
                                    <h1 className="text-md">{item.amount}<span className="text-xs text-primary">Z</span> to {item.to}</h1>
                                )}
                            </div>
                        ))}
                        {fromTrans.length == 0 && (
                            <div className="h-32 flex items-center justify-center opacity-85">Nothing Here<span className="text-primary">.</span></div>
                        )}
                    </div>
                </TabsContent>
                <TabsContent value="received">
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
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}