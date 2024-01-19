"use client";
import { Button } from "@/components/ui/button";

export default function RequestBtn(zpi) {
    return (
        <Button variant="secondary" onClick={() => {navigator.share({text:`Send me some zen coin on my zpi : ${zpi}`, title:"ZenPay", url:"https://zenpay.vercel.app"});}}>Request</Button>
    )
}