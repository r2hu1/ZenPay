"use client"

import { toast } from "sonner";

export default function Zpi({ zpi }) {
    return (
        <span onClick={(e) => { navigator.clipboard.writeText(e.target.textContent); toast.success("ZPI copied!") }} className="bg-secondary px-4 py-2 text-sm rounded-full hover:bg-primary cursor-pointer transition">{zpi}</span>
    )
}