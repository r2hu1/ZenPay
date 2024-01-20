import Account from "../_components/Account";

export const metadata = {
    title: "Dashboard",
    description: "Manage your account and transactions in one place.",
}

export default function Page() {
    return (
        <div>
            <Account />
        </div>
    )
}