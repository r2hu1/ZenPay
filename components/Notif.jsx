import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Notif() {
    return (
        <div className="bg-background px-6 py-4 flex items-center justify-between md:px-20 lg:px-32">
            <p className="text-sm">Join now and get 250 Zen for absolutely free<span className="text-primary">.</span></p>
            {/* <Link href="/sign-in" className="text-sm hover:text-primary hover:underline flex items-center justify-center">Claim<ArrowRight className="ml-1 h-4 w-4" /></Link> */}
        </div>
    )
}