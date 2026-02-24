import { client } from "@/sanity/lib/client";
import BlogCard from "../components/BlogCard"; // <-- Reusing our awesome component!

export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
  // Added _id here so BlogCard has a unique key!
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
    <div className="bg-slate-950 min-h-screen relative overflow-hidden pt-48 pb-32">
      
      {/* Background Glows (Matches Home Page) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Articles</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Thoughts, learnings, and tutorials on Flutter, Firebase, Node.js, and building modern web and mobile applications.
          </p>
        </div>
        
        {/* The Grid - Reusing the BlogCard! */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

      </div>
    </div>
  );
}