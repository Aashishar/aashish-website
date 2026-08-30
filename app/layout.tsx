import type { Metadata } from "next";
import { Inter, Calistoga, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Aashish Aryal | Full Stack Developer & Creator",
  description:
    "Aashish Aryal is a Full Stack Developer from Nepal building accessible, pixel-perfect web and mobile experiences with Flutter, Node.js, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable} ${jetbrainsMono.variable}`}>
      <body
        suppressHydrationWarning={true}
        className="font-sans bg-background text-foreground min-h-screen flex flex-col antialiased"
      >
        {/* HEADER */}
        <nav className="sticky top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="relative group">
              <span className="text-lg font-semibold text-foreground tracking-tight">
                Aashish Aryal
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-accent-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>

            <div className="hidden md:flex gap-8 font-medium text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}