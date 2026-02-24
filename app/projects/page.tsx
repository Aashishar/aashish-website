import { client } from "@/sanity/lib/client";
import ProjectCard from "../components/ProjectCard"; // <-- Import the new component

export const revalidate = 60;

async function getProjects() {
  // Added _id to the query so React has a proper key!
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
    <div className="bg-slate-950 min-h-screen relative overflow-hidden pt-48 pb-32">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A collection of my favorite projects, ranging from Flutter mobile applications to full-stack Next.js platforms.
          </p>
        </div>
        
        {/* The Grid - Reusing the ProjectCard! */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project: any) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}