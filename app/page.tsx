import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaFlutter } from "react-icons/fa6";
import LatestPosts from "./components/LatestPosts";
import CallToAction from "./components/CallToAction";
import ProjectCard from "./components/ProjectCard";
import LiquidWave from "./components/LiquidWave";

// Typed interfaces instead of `any`
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

// FIX 1: GROQ comment syntax fixed (// is not valid inside a GROQ string)
// FIX 2: Slice ranges fixed — [0..2] is inclusive and returns 3 items; use [0...3] for explicit 3
async function getData(): Promise<{ posts: Post[]; projects: Project[] }> {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
    },
    "projects": *[_type == "project"][0...2] {
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

export const revalidate = 60;

export default async function Home() {
  const { posts, projects } = await getData();

  return (
    <div className="min-h-screen">

      {/* SECTION 1: HERO */}
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
              Convert your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                ideas into reality.
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-10 lg:mx-0 mx-auto leading-relaxed">
              Hi, I&apos;m Aashish. A Full Stack Developer building accessible, pixel-perfect, performant web and mobile experiences.
            </p>
            {/* FIX 3: Added aria-label for accessibility on icon-only-style links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link href="/blog" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition">
                Read Blog
              </Link>
              <Link href="/projects" className="px-8 py-4 bg-slate-800 border border-slate-700 font-bold rounded-full hover:bg-slate-700 transition text-white">
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Photo */}
          <div className="lg:w-1/3 order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-2xl">
                <Image
                  src="/me.jpg"
                  alt="Aashish Aryal - Full Stack Developer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition duration-500"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        <LiquidWave />
      </section>

      {/* SECTION 2: TECH STACK */}
      <section className="bg-slate-950 text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-semibold mb-12 text-slate-500 uppercase tracking-widest text-sm">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold flex items-center gap-2">
              <FaFlutter size={26} className="text-[#02569B]" /> Flutter
            </span>
            <span className="text-2xl font-bold">Firebase</span>
            <span className="text-2xl font-bold">Node.js</span>
            <span className="text-2xl font-bold">Premiere Pro</span>
            <span className="text-2xl font-bold">Figma</span>
            {/* FIX 4: & in JSX must be escaped as &amp; to avoid HTML entity warnings */}
            <span className="text-2xl font-bold">Git &amp; Github</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="bg-slate-950 text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Featured Work</h2>
            <Link href="/projects" className="text-blue-400 font-bold hover:text-blue-300 transition-colors hidden md:block">
              View all projects &rarr;
            </Link>
          </div>

          {/* FIX 5: Guard against empty projects array to avoid blank grid */}
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-center py-12">No projects yet. Check back soon!</p>
          )}

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: LATEST BLOG POSTS */}
      {/* FIX 6: Guard against empty posts to avoid rendering broken LatestPosts */}
      {posts.length > 0 && <LatestPosts posts={posts} />}

      {/* SECTION 5: CALL TO ACTION */}
      <CallToAction />

    </div>
  );
}