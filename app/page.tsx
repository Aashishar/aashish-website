import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaFlutter } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import LatestPosts from "./components/LatestPosts";
import CallToAction from "./components/CallToAction";
import ProjectCard from "./components/ProjectCard";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any;
  excerpt: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  image: any;
  link: string;
  github: string;
}

async function getData(): Promise<{ posts: Post[]; projects: Project[] }> {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)[0...3] {
      _id, title, slug, publishedAt, mainImage,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
    },
    "projects": *[_type == "project"][0...2] {
      _id, title, description, image, link, github
    }
  }`;
  return client.fetch(query);
}

export const revalidate = 60;

export default async function Home() {
  const { posts, projects } = await getData();

  return (
    <div className="min-h-screen">

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36">
        {/* Ambient radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                Founder @ Codebyte Tech
              </span>
            </div>

            <h1 className="font-display text-[2.75rem] md:text-6xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] mb-8 text-foreground">
              Convert your{" "}
              <span className="relative inline-block">
                <span className="gradient-text">ideas into reality.</span>
                <span className="absolute -bottom-1 md:-bottom-2 left-0 h-3 md:h-4 w-full rounded-sm bg-gradient-to-r from-accent/[0.15] to-accent-secondary/10" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 mx-auto lg:mx-0 leading-relaxed">
              Hi, I&apos;m Aashish. A Full Stack Developer building accessible,
              pixel-perfect, performant web and mobile experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-gradient-to-r from-accent to-accent-secondary text-accent-foreground font-medium shadow-sm hover:shadow-accent-lg hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
              >
                Read Blog
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center h-14 px-8 rounded-xl border border-border text-foreground font-medium hover:bg-muted hover:border-accent/30 transition-all duration-200 w-full sm:w-auto"
              >
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT: Photo with decorative ring */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating dashed ring */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-accent/20 animate-spin-slow hidden md:block" />

              {/* Gradient border wrapper */}
             <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-accent via-accent-secondary to-accent p-[2px] shadow-xl">
  <div className="relative w-full h-full rounded-[calc(1rem-2px)] overflow-hidden bg-card">
    <Image
      src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=800&auto=format&fit=crop"
      alt="Vintage computer"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

              {/* Floating accent chip */}
              <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 shadow-lg animate-float">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: TECH STACK (inverted) */}
     
<section className="relative bg-foreground text-background py-20 overflow-hidden">
  <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />
  <div className="relative max-w-6xl mx-auto px-6">
    <div className="flex justify-center mb-10">
      <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2">
        <span className="h-2 w-2 rounded-full bg-accent-secondary" />
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/70">
          Technologies I work with
        </span>
      </div>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
      <span className="text-xl font-semibold flex items-center gap-2">
        <FaFlutter size={22} className="text-[#4D7CFF]" /> Flutter
      </span>
      <span className="text-xl font-semibold">Firebase</span>
      <span className="text-xl font-semibold">Node.js</span>
      <span className="text-xl font-semibold">Premiere Pro</span>
      <span className="text-xl font-semibold">Figma</span>
      <span className="text-xl font-semibold">Git &amp; Github</span>
    </div>
  </div>
</section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Selected Work
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-1 text-accent font-medium hover:text-accent-secondary transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>

          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-12">No projects yet. Check back soon!</p>
          )}

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="text-accent font-medium hover:text-accent-secondary transition-colors">
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {posts.length > 0 && <LatestPosts posts={posts} />}
      <CallToAction />
    </div>
  );
}