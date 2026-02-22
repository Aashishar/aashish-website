import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

async function getProjects() {
  return client.fetch(`
    *[_type == "project"] {
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
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-black mb-12 tracking-tight">
        My <span className="text-blue-600">Work</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project: any, index: number) => (
          <div key={index} className="border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl transition bg-white dark:bg-slate-900">
            {/* Project Image */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
              {project.image && (
                <Image 
                  src={urlFor(project.image).url()} 
                  alt={project.title} 
                  fill 
                  className="object-cover hover:scale-105 transition duration-500"
                />
              )}
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition">
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" className="px-6 py-2 border border-slate-300 dark:border-slate-700 font-bold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}