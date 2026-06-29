import {ThemeToggle} from "@/components/theme-toggle";
import {headers} from "next/headers";
import {LifeBuoy, Rocket, LogIn} from "lucide-react";

export default async function Navbar() {
    const headersList = await headers();
    const hostname = headersList.get("host") || "";
    const isApp = hostname.startsWith("app.");

    return (
        <header className="sticky top-0 z-50 glass-panel">
            <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-bold text-m tracking-tight">
                    BuildLapse
                </div>

                <div className="flex gap-5 items-center">
                    <button className="flex items-center gap-2 text-s opacity-100 hover:opacity-80 active:opacity-60 transition-opacity">
                        <LifeBuoy className="w-5 h-5"/>
                        <span className="hidden md:inline">
                            Help
                        </span>
                    </button>

                    {!isApp && (
                        <button className="flex items-center gap-2 text-s opacity-100 hover:opacity-80 active:opacity-60 transition-opacity">
                            <Rocket className="w-5 h-5"/>
                            <span className="hidden md:inline">
                                Launch App
                            </span>
                        </button>
                    )}

                    <ThemeToggle/>

                    <button className="flex items-center gap-2 text-s opacity-100 hover:opacity-80 active:opacity-60 transition-opacity">
                        <LogIn className="w-5 h-5"/>
                        <span className="hidden md:inline">
                            Login
                        </span>
                    </button>

                    <button className="bg-buttons text-button-text -text-s px-5 py-2 rounded-full font-medium opacity-100 hover:opacity-80 active:opacity-60 shadow-sm shadow-buttons/10">
                        Register
                    </button>
                </div>
            </nav>
        </header>
    );
}