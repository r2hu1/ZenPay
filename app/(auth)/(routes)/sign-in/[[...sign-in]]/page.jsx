import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export const metadata = {
    title:"Sign In",
    description:"Sign in to your account.",
}

export default function Page() {
    return (
        <div className="h-full w-full left-0 right-0 top-0 absolute flex items-center justify-center">
            <ClerkLoading>
                <Skeleton className="h-[320px] w-full max-w-sm rounded-md" />
            </ClerkLoading>
            <ClerkLoaded>
                <SignIn />
            </ClerkLoaded>
        </div>
    );
}