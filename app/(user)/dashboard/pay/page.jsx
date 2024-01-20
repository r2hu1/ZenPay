import PaymentForm from "@/app/(user)/_components/PaymentForm";

export const metadata = {
    title: "Pay",
    description: "Transfer zen securely anywhere in the world.",
}

export default function Page() {
    return (
        <div>
            <PaymentForm />
        </div>
    )
}