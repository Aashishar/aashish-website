import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";

interface LatestPostsProps {
  posts: any[];
}

export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                From the Blog
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground mb-4">
              Latest <span className="gradient-text">Writings</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I write about web development, design systems, and my journey as a creator.
            </p>
          </div>

          <Link
            href="/blog"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted hover:border-accent/30 transition-all duration-200 shrink-0"
          >
            Read all posts
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}