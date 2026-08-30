import Image from "next/image";
import { MapPin, Mail, Briefcase, Code2, Smartphone, Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-28 pb-32">

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Page Header */}
        <div className="mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              About
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] text-foreground">
            A little bit <span className="gradient-text">about me.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* LEFT SIDE: Image & Quick Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-32">

            {/* Image with gradient border, slight tilt */}
            <div className="relative w-72 h-72 md:w-full md:aspect-square mx-auto group">
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-accent via-accent-secondary to-accent p-[2px] shadow-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="relative w-full h-full rounded-[calc(1rem-2px)] overflow-hidden bg-card">
                  <Image
                    src="/me.jpg"
                    alt="Aashish Aryal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Quick Info Badges */}
            <div className="flex flex-col gap-4 bg-card border border-border p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="text-accent" size={20} />
                <span className="font-medium">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Briefcase className="text-accent-secondary" size={20} />
                <span className="font-medium">Available for hire</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="text-accent" size={20} />
                <a href="mailto:hello@example.com" className="font-medium hover:text-accent transition-colors">
                  itsmeaashisharyal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Biography */}
          <div className="w-full lg:w-2/3 prose prose-lg max-w-none">

            <h2 className="font-display text-3xl text-foreground mb-6">
              Hi, I&apos;m Aashish Aryal.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Full Stack Developer and Software Engineer passionate about building high-performance, accessible, and beautiful applications. Whether it&apos;s a sleek mobile app or a complex web platform, I love turning ideas into reality.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-12">
              My journey in tech started with a curiosity about how things work on the internet. Today, I specialize in the modern web stack, specifically <strong className="text-foreground">Next.js, React, Node.js</strong>, and building cross-platform mobile experiences using <strong className="text-foreground">Flutter and Firebase</strong>.
            </p>

            {/* What I Do */}
            <h3 className="font-display text-2xl text-foreground mb-8 border-b border-border pb-4">
              What I Do
            </h3>

            {/* Resume Download Button */}
            <div className="mt-12 mb-16">
              <a
                href="/resume.pdf"
                download="Aashish_Aryal_Resume.pdf"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-secondary text-accent-foreground font-medium shadow-sm hover:shadow-accent-lg hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] transition-all duration-200 no-underline"
              >
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>

            {/* Experience Timeline */}
            <h3 className="font-display text-2xl text-foreground mb-8 border-b border-border pb-4">
              Experience
            </h3>

            <div className="relative border-l border-border ml-3 space-y-12 pb-8">

              {/* Timeline Item 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-background"></div>
                <h4 className="text-xl font-semibold text-foreground m-0">Full Stack Developer</h4>
                <p className="text-accent font-mono text-sm mt-1 mb-3">Freelance • 2024 - Present</p>
                <p className="text-muted-foreground text-sm m-0">
                  Building custom web applications using Next.js and Tailwind CSS. Developing cross-platform mobile apps for local clients in Nepal using Flutter and Firebase.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-border ring-4 ring-background"></div>
                <h4 className="text-xl font-semibold text-foreground m-0">Frontend Developer</h4>
                <p className="text-muted-foreground font-mono text-sm mt-1 mb-3">Company Name • 2022 - 2024</p>
                <p className="text-muted-foreground text-sm m-0">
                  Collaborated with design teams to build pixel-perfect user interfaces in React. Improved website load times and implemented responsive designs.
                </p>
              </div>

            </div>

            {/* What I Do cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-secondary mb-4">
                  <Code2 className="text-white" size={22} />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Web Development</h4>
                <p className="text-sm text-muted-foreground m-0">
                  Building lightning-fast, SEO-friendly websites and web apps using Next.js and Tailwind CSS.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-secondary mb-4">
                  <Smartphone className="text-white" size={22} />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Mobile Apps</h4>
                <p className="text-sm text-muted-foreground m-0">
                  Crafting beautiful, cross-platform mobile applications for iOS and Android using Flutter.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not writing code, you can find me writing articles for my blog, exploring new open-source libraries, or experimenting with design tools like Figma and Premiere Pro.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}