import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaFlutter } from "react-icons/fa6";
import LatestPosts from "./components/LatestPosts";
import CallToAction from "./components/CallToAction";
import ProjectCard from "./components/ProjectCard"; // <-- ADDED THIS

import LiquidWave from "./components/LiquidWave";


// fetch data 
async function getData() {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)[0..2] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage, // <--- YOU NEED TO ADD THIS LINE!
      "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
    },
    "projects": *[_type == "project"][0..1] {
      _id,
      title,
      description,
      image,
      link,
      github
    }
  }`;
  return client.fetch(query);
}

export const revalidate = 60; // Refresh data every 60s

export default async function Home() {
  const { posts, projects } = await getData();

  return (
    <div className="min-h-screen">
      
      {/* SECTION 1: HERO (Darker blue/purple) */}
      <section className="relative bg-slate-900 text-white pb-40 overflow-hidden pt-48">
        
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT SIDE: Text Content */}
          <div className="lg:w-2/3 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
              Convert your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
               ideas into reality.
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-10 lg:mx-0 mx-auto leading-relaxed">
              Hi, I'm Aashish. A Full Stack Developer building accessible, pixel-perfect, performant web and mobile experiences.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link href="/blog" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition">
                Read Blog
              </Link>
              <Link href="/projects" className="px-8 py-4 bg-slate-800 border border-slate-700 font-bold rounded-full hover:bg-slate-700 transition text-white">
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Your Photo */}
          <div className="lg:w-1/3 order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-2xl">
                <Image 
                  src="/me.jpg" 
                  alt="Aashish"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition duration-500"
                  priority 
                />
              </div>
            </div>
          </div>

        </div>

        {/* LIQUID WAVE DIVIDER */}
     <LiquidWave />
      </section>

      {/* SECTION 2: TECH STACK (Now matches bg-slate-950) */}
      <section className="bg-slate-950 text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-semibold mb-12 text-slate-500 uppercase tracking-widest text-sm">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-2xl font-bold flex items-center gap-2"><FaFlutter size={26} className="text-[#02569B]" /> Flutter</span>
             <span className="text-2xl font-bold">Firebase</span>
             <span className="text-2xl font-bold">Node.js</span>
             <span className="text-2xl font-bold">Premiere Pro</span>
             <span className="text-2xl font-bold">Figma</span>
             <span className="text-2xl font-bold">Git & Github</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS (Now using ProjectCard!) */}
      <section className="bg-slate-950 text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Featured Work</h2>
            <Link href="/projects" className="text-blue-400 font-bold hover:text-blue-300 transition-colors hidden md:block">
              View all projects &rarr;
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* BIG FIX: Using the component instead of raw HTML */}
            {projects.map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
          
          {/* Mobile view all link */}
          <div className="mt-8 text-center md:hidden">
             <Link href="/projects" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: LATEST BLOG POSTS */}
      <LatestPosts posts={posts} />

      {/* SECTION 5: CALL TO ACTION */}
      <CallToAction />

    </div>
  );
}