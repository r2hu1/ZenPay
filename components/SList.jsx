export default function SList() {
    return (
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="border rounded-md px-4 py-4 bg-background max-w-sm">
                <h1 className="font-bold text-lg first-letter:text-primary first-letter:text-xl">Easy</h1>
                <p className="text-sm">Explore ZenPay effortlessly with our user-friendly interface from easy registration to seamless transactions<span className="text-primary">.</span></p>
            </div>

            <div className="border rounded-md px-4 py-4 bg-background max-w-sm">
                <h1 className="font-bold text-lg first-letter:text-primary first-letter:text-xl">Fast</h1>
                <p className="text-sm">Experience swift and efficient transactions with ZenPay, fast transactions with ease<span className="text-primary">.</span></p>
            </div>

            <div className="border rounded-md px-4 py-4 bg-background max-w-sm">
                <h1 className="font-bold text-lg first-letter:text-primary first-letter:text-xl">Secure</h1>
                <p className="text-sm">Rest easy with ZenPay's robust security measures, providing bank-level protection for your funds<span className="text-primary">.</span></p>
            </div>
        </div>
    )
}