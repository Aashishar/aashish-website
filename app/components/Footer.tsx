import Link from "next/link";
import { Github, Youtube, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1: Brand & Socials */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl text-foreground">Aashish Aryal</h2>
            <p className="leading-relaxed">
              Full stack developer making <br /> our world better through code.
            </p>
          </div>

          <div className="flex gap-5 text-muted-foreground">
            <Link href="https://github.com/Aashishar" className="hover:text-accent transition-colors"><Github size={22} /></Link>
            <Link href="https://www.youtube.com/@aashish_png" className="hover:text-accent transition-colors"><Youtube size={22} /></Link>
            <Link href="https://x.com/aashish_png" className="hover:text-accent transition-colors"><Twitter size={22} /></Link>
          </div>
        </div>

        {/* Column 2: Contact & General */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="font-mono text-foreground uppercase tracking-[0.15em] text-xs">Contact</h3>
            <ul className="space-y-3">
              <li><Link href="mailto:itsmeaashisharyal@gmail.com" className="hover:text-accent transition-colors">Email me</Link></li>
              <li><Link href="https://www.linkedin.com/in/aashisharyal/" className="hover:text-accent transition-colors">LinkedIn</Link></li>
              <li><Link href="https://x.com/aashish_png" className="hover:text-accent transition-colors">Twitter DM</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-foreground uppercase tracking-[0.15em] text-xs">General</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-accent transition-colors">My Mission</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Resume</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Sitemap */}
        <div className="space-y-4">
          <h3 className="font-mono text-foreground uppercase tracking-[0.15em] text-xs">Sitemap</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Uses</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Guestbook</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground text-lg">Stay up to date</h3>
            <p className="text-sm leading-relaxed">
              Subscribe to the newsletter to stay up to date with articles, projects and much more!
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase mb-2 text-muted-foreground tracking-wide">First name</label>
              <input
                type="text"
                className="w-full h-12 bg-card border border-border rounded-lg px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                placeholder="Aashish"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase mb-2 text-muted-foreground tracking-wide">Email</label>
              <input
                type="email"
                className="w-full h-12 bg-card border border-border rounded-lg px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                placeholder="hello@example.com"
              />
            </div>

            <button className="flex items-center gap-3 group pt-2">
              <span className="text-foreground font-medium group-hover:text-accent transition-colors">Sign me up</span>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition">
                <ArrowRight size={18} className="text-foreground group-hover:text-accent transition-colors" />
              </div>
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}