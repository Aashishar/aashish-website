import { Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-foreground text-background">
      {/* Dot texture */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/70">
            Available for hire
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-6xl leading-[1.1] tracking-[-0.02em] mb-6">
          Let&apos;s build something <br className="hidden md:block" />
          <span className="gradient-text">great together.</span>
        </h2>

        {/* Description */}
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          I&apos;m currently open to new opportunities, whether locally in Nepal or remote worldwide.
          Got a question, a project idea, or just want to say hi? My inbox is always open!
        </p>

        {/* CTA button */}
        <div className="flex justify-center">
          <a
            href="mailto:itsmeaashisharyal@gmail.com"
            className="group inline-flex items-center gap-3 h-14 px-8 rounded-xl bg-gradient-to-r from-accent to-accent-secondary text-white font-medium shadow-accent hover:shadow-accent-lg hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span>Say Hello</span>
          </a>
        </div>

      </div>
    </section>
  );
}