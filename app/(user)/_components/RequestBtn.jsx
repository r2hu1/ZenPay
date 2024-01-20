"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Plus } from "lucide-react";
import { toast } from "sonner";

export default function RequestBtn({ zpiid }) {
    return (
        <>
            <Button onClick={() => { navigator.clipboard.writeText(zpiid); toast.success("ZPI copied!") }} className="flex items-center justify-center">Receive<ArrowDown className="h-4 w-4" /></Button>
            <Button variant="secondary" onClick={() => { navigator.share({ text: `Send me some zen coin on my zpi id: ${zpiid}`, title: "ZenPay", url: "https://zenpay.vercel.app" }); }} className="flex items-center justify-center gap-[2px]" size="icon"><Plus className="h-4 w-4" /></Button>
        </>
    )
}