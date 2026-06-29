import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "BuildLapse",
    description: "Record your screen timelapses and track hours",
};

export default function RootLayout({
    children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} font-main antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar/>
                    <main className="max-w-7xl mx-auto px-4 py-8">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}