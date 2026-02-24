import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:bg-slate-900/60 hover:border-blue-500/50 transition-all duration-300">
      
      {/* Project Image */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-slate-800 border border-slate-800/50">
        {project.image ? (
          <Image 
            src={urlFor(project.image).url()} 
            alt={project.title} 
            fill 
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-700 font-bold tracking-widest">
            NO IMAGE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-auto">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600/10 text-blue-400 border border-blue-600/20 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 text-white border border-slate-700 font-bold rounded-full hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <Github size={18} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}