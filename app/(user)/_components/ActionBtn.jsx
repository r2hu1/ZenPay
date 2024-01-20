"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Plus, ScanBarcodeIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Zpi from "./Zpi";
import { toast } from "sonner";
import domtoimage from 'dom-to-image';
import { useRef } from 'react';
import { useState } from "react";

export default function ActionBtn({ zpiid }) {
    const qrcodeRef = useRef(null);
    const zpiQr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${zpiid}`;
    const handleDownload = () => {
        toast.loading("downloading");
        domtoimage.toJpeg(qrcodeRef.current, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'qrcode.jpeg';
                link.href = dataUrl;
                link.click();
                toast.success("downloaded");
            })
    };

    const [scanResult, setScanResult] = useState("");
    const handleScan = async(e) => {
        toast.error("scanning not supported yet");
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex items-center justify-center">Receive<ArrowDown className="h-4 w-4" /></Button>
                </DialogTrigger>
                <DialogContent className="rounded-md">
                    <DialogHeader className="mt-7">
                        <DialogTitle className="text-xl md:text-xl sm:text-xl sm:text-center -mb-1 md:text-center">Scan And Pay</DialogTitle>
                        <DialogDescription className="py-5 grid gap-4">
                            <p className="text-center text-xs -mt-6">Scan this QR code using zenpay app <br /> and send me zen coin</p>
                            <Zpi zpi={zpiid} showshare={false} />
                            <img ref={qrcodeRef} src={zpiQr} alt="qrcode" className="mx-auto rounded-md h-[250px] w-[250px] bg-secondary" />
                            <div className="flex gap-2 mt-4">
                                <Button className="w-full" onClick={() => { navigator.share({ title: "Scan and Pay", url: zpiQr, text: `Scan this QR code and send me zen coin!` }) }}>Share</Button>
                                <Button className="w-full" onClick={handleDownload} variant="secondary">Save</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Button size="icon" onClick={handleScan} variant="secondary"><ScanBarcodeIcon className="h-4 w-4" /></Button>
            <Button variant="secondary" onClick={() => { navigator.share({ text: `Send me some zen coin on my zpi id: ${zpiid}`, title: "ZenPay", url: "https://zenpay.vercel.app" }); }} className="flex items-center justify-center gap-[2px]" size="icon"><Plus className="h-4 w-4" /></Button>
        </>
    )
}