import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
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
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-12 border-b border-slate-200 pb-4">
        Latest Articles
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link 
            key={post.slug.current} 
            href={`/blog/${post.slug.current}`} 
            className="group block"
          >
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              
              {/* Image */}
              <div className="relative h-48 w-full bg-slate-200">
                {post.mainImage && (
                  <Image 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}