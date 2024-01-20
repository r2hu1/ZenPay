import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, UserButton, currentUser } from "@clerk/nextjs";
import Zpi from "./Zpi";
import { CreateAccount } from "@/lib/create";

export default async function DHeader() {
    const user = await currentUser();
    const zpi = user?.emailAddresses[0]?.emailAddress?.split("@")[0] + "@zpi";

    return (
        <header className="flex items-center justify-between py-6 px-6 md:px-20 lg:px-32">
            <div>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
                <ClerkLoading>
                    <Skeleton className="h-8 w-8 rounded-full" />
                </ClerkLoading>
            </div>
            <div>
                {!zpi ? (
                    <Skeleton className="h-8 w-32 rounded-full" />
                ) : (
                    <Zpi zpi={zpi} />
                )}
            </div>
        </header>
    )
}