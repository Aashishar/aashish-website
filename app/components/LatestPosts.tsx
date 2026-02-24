import Link from "next/link";
import BlogCard from "./BlogCard";

interface LatestPostsProps {
  posts: any[];
}

export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
              Latest Writings
            </h2>
            <p className="text-slate-400 text-lg">
              I write about web development, design systems, and my journey as a creator.
            </p>
          </div>
          
          <Link href="/blog" className="group flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-white rounded-full font-bold hover:bg-slate-800 transition">
            Read all posts
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}