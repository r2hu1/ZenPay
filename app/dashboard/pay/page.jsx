import DFooter from "../../_components/DFooter";
import DHeader from "../../_components/DHeader";
import PaymentForm from "@/app/_components/PaymentForm";

export const metadata = {
    title:"Pay",
    description:"Transfer zen securely anywhere in the world.",
}

export default function Page() {
    return (
        <div>
            <div className="absolute inset-0 -z-30 h-[600px] w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]"><div className="absolute left-0 right-0 top-0 -z-30 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-10 blur-[100px]"></div></div>
            <DHeader />
            <PaymentForm />
            <DFooter />
        </div>
    )
}