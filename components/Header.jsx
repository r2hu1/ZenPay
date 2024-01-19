import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs";

export default async function Header() {
    const user = await currentUser();
    return (
        <header className="flex items-center justify-between py-5 px-6 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex items-center justify-center gap-2">
                <Button asChild><Link href={!user ? "/sign-in" : "/dashboard"}>{!user ? "Sign In" : "Dashboard"}</Link></Button>
                <ModeToggle />
            </div>
        </header>
    )
}