import { client } from "@/sanity/lib/client";
import BlogCard from "../components/BlogCard";

export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id, 
    title,
    slug,
    publishedAt,
    mainImage,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "..."
  }`;
  return client.fetch(query);
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen relative overflow-hidden pt-28 pb-32">

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Page Header */}
        <div className="mb-16 border-b border-border pb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              Blog
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
            All <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Thoughts, learnings, and tutorials on Flutter, Firebase, Node.js, and building modern web and mobile applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

      </div>
    </div>
  );
}