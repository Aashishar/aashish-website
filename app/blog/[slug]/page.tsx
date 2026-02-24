import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 60; // Revalidate every 60 seconds

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  // Await the params (Next.js 15 requirement)
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`, 
    { slug }
  );

  if (!post) {
    notFound();
  }

  // Format the date to look like "February 24, 2026"
  const date = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : "Recently Published";

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden pt-40 pb-32">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <article className="relative z-10 max-w-3xl mx-auto px-6">
        
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          Back to articles
        </Link>

        {/* Post Header */}
        <div className="mb-12 border-b border-slate-800 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
            {post.title}
          </h1>
          
          {/* Meta Info (Author and Date) */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700 bg-slate-800">
                <Image src="/me.jpg" alt="Aashish Aryal" width={40} height={40} className="object-cover" />
              </div>
              <span className="text-slate-300">Aashish Aryal</span>
            </div>
            
            {/* Divider Dot */}
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>

            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-slate-500" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        {post.mainImage && (
          <div className="relative aspect-video w-full mb-16 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
             <Image 
               src={urlFor(post.mainImage).url()} 
               alt={post.title} 
               fill 
               className="object-cover opacity-90 hover:opacity-100 transition duration-500" 
               priority
             />
          </div>
        )}

        {/* Blog Content */}
        {/* prose-invert turns the text white. The other classes make it look beautiful. */}
          <div className="prose prose-lg md:prose-xl prose-invert max-w-none 
          text-slate-300 
          prose-headings:text-white 
          prose-headings:font-black 
          prose-headings:tracking-tight 
          prose-a:text-blue-400 hover:prose-a:text-blue-300 
          prose-strong:text-white 
          prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
          prose-img:rounded-3xl prose-img:border prose-img:border-slate-800"
        >
          {post.body ? <PortableText value={post.body} /> : <p>No content found.</p>}
        </div>

      </article>
    </div>
  );
}