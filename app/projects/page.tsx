import { client } from "@/sanity/lib/client";
import ProjectCard from "../components/ProjectCard";

export const revalidate = 60;

async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      description,
      image,
      link,
      github
    }
  `);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen relative overflow-hidden pt-28 pb-32">

      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Page Header */}
        <div className="mb-16 border-b border-border pb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              Portfolio
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
            My <span className="gradient-text">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A collection of my favorite projects, ranging from Flutter mobile applications to full-stack Next.js platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}