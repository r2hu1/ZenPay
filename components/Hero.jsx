import Link from "next/link";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import SList from "./SList";
import { currentUser } from "@clerk/nextjs";

export default async function Hero() {
    const user = await currentUser();
    return (
        <div className="py-20 px-6 md:px-20 lg:px-32 grid place-items-center">

            <div className="max-w-[600px] mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    An frictional currency powered and built by javascript<span className="text-primary">.</span>
                </h1>
                <p className="text-xs md:text-sm mt-1 text-center">
                    this is my imagination of a currency that didn't exists in this universe, pay/get/exchange/buy/sell using user dashboard.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                    <Button variant="secondary" asChild><Link className="flex items-center justify-center gap-2" href="https://github.com/r2hu1/zenpay">Source<Github className="h-4 w-4 hidden" /></Link></Button>
                    <Button asChild><Link href={!user ? "/sign-up" : "/dashboard"}>Get Started</Link></Button>
                </div>
            </div>

            <SList/>
        </div>
    )
}