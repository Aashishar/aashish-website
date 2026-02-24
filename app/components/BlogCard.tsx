import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

interface BlogCardProps {
  post: any;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Format the date properly
  const date = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : "Recently Published";

  return (
    <Link href={`/blog/${post.slug.current}`} className="group relative">
      <article className="h-full flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:bg-slate-900/60 hover:border-blue-500/50 transition-all duration-300">
        
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-800">
          {post.mainImage ? (
            <Image 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-700 font-bold">
              NO IMAGE
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
            {date}
          </p>
          <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
            {post.excerpt}
          </p>
          
          <div className="mt-auto flex items-center text-white font-bold text-sm">
            Read Article 
            <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
          </div>
        </div>
      </article>
    </Link>
  );
}