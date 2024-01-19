import Logo from "@/components/Logo";

export default function DFooter() {
    return (
        <footer className="mt-20 mb-10 px-6 md:px-20 lg:px-32 grid place-content-center text-center">
            <Logo/>
            <p className="text-xs mb-4">Built using nextjs by <a className="hover:text-primary hover:underline" href="https://rahul.eu.org">r2hu1</a></p>
            {/* <ul className="list-none grid">
                <li><a className="hover:text-primary hover:underline text-sm" href="https://rahul.eu.org">Hire Me</a></li>
                <li><a className="hover:text-primary hover:underline text-sm" href="https://rahul.eu.org">Free Zen Coin</a></li>
            </ul> */}
            <ul className="list-none flex gap-2 items-center">
                <li><a target="_blank" className="transition bg-secondary py-1 px-3 rounded-full hover:bg-primary text-sm" href="https://instagram.com/r.rah_ul">Instagram</a></li>
                <li><a target="_blank" className="transition bg-secondary py-1 px-3 rounded-full hover:bg-primary text-sm" href="https://github.com/r2hu1">Github</a></li>
            </ul>
            {/* <p className="text-xs mt-4">©{new Date().getFullYear()} All rights reserved.</p> */}
        </footer>
    )
}