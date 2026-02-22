import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// 1. Fetch Data (Projects & Posts)
async function getData() {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)[0..2] {
      _id,      // <--- ADD THIS
      title,
      slug,
      publishedAt,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
    },
    "projects": *[_type == "project"][0..1] {
      _id,      // <--- ADD THIS
      title,
      description,
      image,
      link
    }
  }`;
  return client.fetch(query);
}

export const revalidate = 60; // Refresh data every 60s

export default async function Home() {
  const { posts, projects } = await getData();

  return (
    <div className="bg-slate-50 min-h-screen">
      
    {/* SECTION 1: HERO */}
<section className="relative bg-slate-900 text-white pb-40 overflow-hidden">
  {/* Background Blobs */}
 <div className="relative z-10 max-w-7xl mx-auto px-6 pt-48 flex flex-col lg:flex-row items-center justify-between gap-12">
    <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl" />
    <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* LEFT SIDE: Text Content */}
    <div className="lg:w-2/3 text-center lg:text-left order-2 lg:order-1">
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
        Convert your <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
         ideas into reality.
        </span>
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-10 lg:mx-0 mx-auto">
        Hi, I'm Aashish. A Full Stack Developer building accessible, pixel-perfect, performant web experiences.
      </p>
      <div className="flex gap-4 justify-center lg:justify-start">
        <Link href="/blog" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition">
          Read Blog
        </Link>
        <Link href="/projects" className="px-8 py-4 bg-slate-800 border border-slate-700 font-bold rounded-full hover:bg-slate-700 transition">
          View Work
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE: Your Photo */}
    <div className="lg:w-1/3 order-1 lg:order-2 flex justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 group">
        {/* Decorative Ring around photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
        
        {/* The Image Container */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-2xl">
          <Image 
            src="/me.jpg" // Put your photo in the public folder named me.jpg
            alt="Aashish"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-500"
            priority // This makes the photo load instantly
          />
        </div>
      </div>
    </div>

  </div>

  {/* Wave Divider */}
  <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 text-slate-50">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
    </svg>
  </div>
</section>

      {/* SECTION 2: TECH STACK (Static) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 font-semibold mb-8 uppercase tracking-widest text-sm">
          Technologies I work with
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {/* You can replace these with actual SVG icons later */}
           <span className="text-2xl font-bold text-slate-700">Next.js</span>
           <span className="text-2xl font-bold text-slate-700">React</span>
           <span className="text-2xl font-bold text-slate-700">TypeScript</span>
           <span className="text-2xl font-bold text-slate-700">Tailwind</span>
           <span className="text-2xl font-bold text-slate-700">Sanity</span>
           <span className="text-2xl font-bold text-slate-700">Node.js</span>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black text-slate-900">Featured Work</h2>
            <Link href="/projects" className="text-blue-600 font-bold hover:underline">
              View all &rarr;
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project: any) => (
              <div key={project._id} className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
                <div className="aspect-video relative overflow-hidden">
                  {project.image ? (
                    <Image 
                      src={urlFor(project.image).url()} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">No Image</div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <Link href={project.link || "#"} className="text-blue-600 font-bold hover:underline">
                    View Project &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LATEST BLOG POSTS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black text-slate-900">Latest Writings</h2>
          <Link href="/blog" className="text-blue-600 font-bold hover:underline">
            Read all posts &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-sm text-slate-500 mb-4 font-mono">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-6">Let's build something great.</h2>
          <p className="text-blue-100 text-lg mb-8">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:hello@example.com" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition">
            Say Hello
          </a>
        </div>
      </section>

    </div>
  );
}