"use client";

import * as React from "react";
import {useTheme} from "next-themes";
import {Sun, Moon} from "lucide-react";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-9 h-9"/>;

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full border border-content/10 bg-content/5 hover:opacity-80 active:opacity-60 transition-opacity flex items-center justify-center"
                aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-content"/>
            ) : (
                <Moon className="w-5 h-5 text-content"/>
            )}
        </button>
    );
}