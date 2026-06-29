import {ThemeToggle} from "@/components/theme-toggle";
import {headers} from "next/headers";
import {LifeBuoy, Rocket, LogIn} from "lucide-react";

export default async function Navbar() {
    const headersList = await headers();
    const hostname = headersList.get("host") || "";
    const isApp = hostname.startsWith("app.");

    const ghostButtonClasses = "flex items-center gap-2 text-s text-content opacity-100 hover:opacity-80 active:opacity-60 transition-opacity";

    return (
        <header className="sticky top-0 z-50 glass-panel">
            <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-bold text-content text-l tracking-tight">
                    BuildLapse
                </div>

                <div className="flex gap-5 items-center">
                    <button className={ghostButtonClasses}>
                        <LifeBuoy strokeWidth={1.5} className="w-5 h-5"/>
                        <span className="hidden md:inline">
                            Help
                        </span>
                    </button>

                    {!isApp && (
                        <button className={ghostButtonClasses}>
                            <Rocket strokeWidth={1.5} className="w-4.5 h-4.5"/>
                            <span className="hidden md:inline">
                                App
                            </span>
                        </button>
                    )}

                    <ThemeToggle/>

                    <button className={ghostButtonClasses}>
                        <LogIn strokeWidth={1.5} className="w-5 h-5"/>
                        <span className="hidden md:inline">
                            Login
                        </span>
                    </button>

                    <button className="font-main bg-buttons text-button-text font-normal text-s px-5 py-2 rounded-full font-medium opacity-100 hover:opacity-80 active:opacity-60 shadow-sm shadow-buttons/10">
                        Register
                    </button>
                </div>
            </nav>
        </header>
    );
}