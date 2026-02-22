import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer  from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aashish Aryal | Portfolio",
  description: "Developer, Writer, Creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
        className={`${inter.className} bg-slate-50 text-slate-900`}
      >
        {/* HEADER: Scrollable with the body */}
        <nav className="absolute top-0 left-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            
            {/* Logo Area */}
            <div className="flex items-center gap-6">
              <Link href="/" className="relative group">
                <span className="text-xl font-bold text-white tracking-tight">
                  Aashish Aryal
                </span>
                {/* Kent-style underline */}
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-white/60"></div>
              </Link>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex gap-8 font-medium text-slate-300">
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <Link href="/projects" className="hover:text-white transition">Projects</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </div>

            {/* Right side Icons */}
            <div className="flex items-center gap-4">
              <button className="text-slate-300 hover:text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
              </button>
              
              <div className="w-10 h-10 rounded-full border-2 border-yellow-500 overflow-hidden relative bg-slate-800">
                <Image 
                  src="/me.jpg" 
                  alt="Aashish" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </nav>

        {/* The main content of your pages */}
        <main>{children}</main>

       <Footer></Footer>
      </body>
    </html>
  );
}