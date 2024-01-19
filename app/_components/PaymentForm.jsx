"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { makeTrans } from "@/lib/create";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function PaymentForm() {
    const [loading, setLoading] = useState(false);
    const [zpi, setZpi] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (loading) {
            toast.loading("paying securely..");
        }
        try {
            const result = await makeTrans(zpi, amount);
            if (result.success) {
                toast.success("payment successfull!");
                setZpi("");
                setAmount("");
                setLoading(false);
            }
            else {
                toast.error(result.error);
                setLoading(false);
            }
        }
        catch (err) {
            toast.error(err);
            setLoading(false);
        }
    }


    return (
        <form onSubmit={handleSubmit} method="post" className="max-w-md mx-auto w-full mt-24 px-6 mb-10">
            <div className="mb-10 -mt-4">
                <h1 className="text-3xl font-bold text-center">Pay Securely<span className="text-primary">.</span></h1>
                <p className="text-center text-sm">transfer zen securely anywhere in the world<span className="text-primary">.</span></p>
            </div>
            <Label htmlFor="email">ZPI Id</Label>
            <Input value={zpi} onChange={(e) => setZpi(e.target.value)} autoComplete="off" type="text" placeholder="someone@zpi" id="email" required />
            <Label htmlFor="amount" className="mt-4">Amount</Label>
            <Input value={amount} onChange={(e) => setAmount(e.target.value)} autoComplete="off" type="number" placeholder="10" id="amount" required />
            <div className="mt-4 flex gap-2 items-center justify-center">
                <Button type="submit" className="w-full" disabled={loading}>{loading ? "paying..." : "Pay"}</Button>
                <Button type="submit" className="w-full" asChild variant="secondary"><Link href="/dashboard">Back</Link></Button>
            </div>
        </form>
    )
}