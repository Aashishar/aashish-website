import Link from "next/link";
import { Github, Youtube, Twitter, Rss, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand & Socials */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Aashish Aryal</h2>
            <p className="text-slate-400 leading-relaxed">
              Full stack developer making <br /> our world better through code.
            </p>
          </div>
          
          <div className="flex gap-5 text-slate-300">
            <Link href="#" className="hover:text-white transition"><Github size={22} /></Link>
            <Link href="#" className="hover:text-white transition"><Youtube size={22} /></Link>
            <Link href="#" className="hover:text-white transition"><Twitter size={22} /></Link>
            <Link href="#" className="hover:text-white transition"><Rss size={22} /></Link>
          </div>

          {/* Signature Placeholder */}
          <div className="pt-4">
             <span className="font-serif italic text-3xl text-slate-700 select-none">
               Aashish Aryal
             </span>
          </div>
        </div>

        {/* Column 2: Contact & General */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-3">
              <li><Link href="mailto:hello@example.com" className="hover:text-white transition">Email me</Link></li>
              <li><Link href="#" className="hover:text-white transition">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white transition">Twitter DM</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">General</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-white transition">My Mission</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Resume</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Sitemap */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm">Sitemap</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="#" className="hover:text-white transition">Uses</Link></li>
            <li><Link href="#" className="hover:text-white transition">Guestbook</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-white font-bold text-xl">Stay up to date</h3>
            <p className="text-sm leading-relaxed">
              Subscribe to the newsletter to stay up to date with articles, projects and much more!
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-2 text-slate-500">First name</label>
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                placeholder="Aashish"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2 text-slate-500">Email</label>
              <input 
                type="email" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                placeholder="hello@example.com"
              />
            </div>
            
            <button className="flex items-center gap-3 group pt-2">
              <span className="text-white font-bold text-lg group-hover:text-blue-400 transition">Sign me up</span>
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition">
                <ArrowRight size={18} className="text-white transition" />
              </div>
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}