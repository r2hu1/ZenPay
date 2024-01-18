import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-5 px-6 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex items-center justify-center gap-2">
                <Button>Login</Button>
                <ModeToggle />
            </div>
        </header>
    )
}