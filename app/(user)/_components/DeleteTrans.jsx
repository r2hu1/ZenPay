"use client"

import { Button } from "@/components/ui/button";
import { deleteTrans } from "@/lib/delete"
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteTrans({ id }) {
    const router = useRouter();
    const handleDelete = async () => {
        try {
            await deleteTrans(id);
            toast.success("Transaction Deleted");
            router.refresh();
        }
        catch (err) {
            toast.error("Error Deleting Transaction");
        }
    }
    return (
        <Button onClick={handleDelete} size="icon" variant="secondary" asChild className="bg-transparent"><X className="h-4 w-4" /></Button>
    )
}