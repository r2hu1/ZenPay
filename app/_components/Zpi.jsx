"use client"

import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { toast } from "sonner";

export default function Zpi({ zpi }) {
    return (
        <div className="flex gap-2 items-center justify-center">
            <span onClick={(e) => { navigator.clipboard.writeText(e.target.textContent); toast.success("ZPI copied!") }} className="bg-secondary border select-none hover:text-white px-4 py-2 text-sm rounded-full hover:bg-primary cursor-pointer transition">{zpi}</span>
            <Button size="icon" className="rounded-full" onClick={() => { navigator.share({ title: "ZenPay", url: "https://zenpay.vercel.app" }); }}><Share className="h-4 w-4" /></Button>
        </div>
    )
}