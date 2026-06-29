import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import {ThemeToggle} from "@/components/theme-toggle";
import {ThemeProvider} from "@/components/theme-provider";
import {headers} from "next/headers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "BuildLapse",
  description: "Record your screen timelapses and track hours",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const headersList = await headers();
    const hostname = headersList.get("host") || "";
    const isApp = hostname.startsWith("app.");

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} font-main antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header className="sticky top-0 z-50 glass-panel">
                        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                            <div className="font-bold text-m tracking-tight">
                                BuildLapse
                            </div>

                            <div className="flex gap-5 items-center">
                                <button className="text-s opacity-100 hover:opacity-80 active:opacity-60 transition-opacity">
                                    Help
                                </button>

                                {!isApp && (
                                    <button className="text-s opacity-100 hover:opacity-80 active:opacity-60 transition-opacity">
                                        Launch App
                                    </button>
                                )}

                                <ThemeToggle/>

                                <button className="text-s opacity-100 hover:opacity-80 active:opacity-60 transition-opacity">
                                    Login
                                </button>

                                <button className="bg-buttons text-button-text --text-s px-5 py-2 rounded-full font-medium opacity-100 hover:opacity-80 active:opacity-60 shadow-sm shadow-buttons/10">
                                    Register
                                </button>
                            </div>
                        </nav>
                    </header>

                    <main className="max-w-7xl mx-auto px-4 py-8">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}