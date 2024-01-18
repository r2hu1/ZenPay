import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <h1 className="select-none text-3xl font-bold">Zen<span className="text-primary">Pay</span></h1>
        </Link>
    )
}