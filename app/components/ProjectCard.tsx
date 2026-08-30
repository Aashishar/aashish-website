import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300">

      {/* Project Image */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-muted border border-border">
        {project.image ? (
          <Image
            src={urlFor(project.image).url()}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-xs uppercase tracking-widest">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-secondary text-accent-foreground font-medium shadow-sm hover:shadow-accent hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted hover:border-accent/30 transition-all duration-200"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}