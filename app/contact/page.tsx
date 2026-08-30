import ContactForm from "../components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aashish Aryal",
  description: "Get in touch with Aashish Aryal — available for freelance projects, collaborations, and general inquiries.",
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "itsmeaashisharyal@gmail.com",
    href: "mailto:itsmeaashisharyal@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Kathmandu, Nepal",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response time",
    value: "Within 24–48 hours",
    href: null,
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/aashisharyal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aashisharyal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/aashisharyal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-accent/[0.06] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              Get In Touch
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* LEFT: Info panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">Contact info</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m currently open to freelance work, full-time opportunities, and interesting side projects.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground hover:text-accent transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Socials */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-2.5 bg-accent/5 border border-accent/20 rounded-xl px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <p className="text-sm text-foreground font-medium">
                  Currently <span className="text-green-600">available</span> for new projects
                </p>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <h2 className="font-display text-xl text-foreground mb-6">Send a message</h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}