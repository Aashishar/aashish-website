import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

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

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
        {post.title}
      </h1>
      
      {/* Hero Image */}
      {post.mainImage && (
        <div className="relative h-64 md:h-96 w-full mb-10 rounded-3xl overflow-hidden shadow-lg">
           <Image 
             src={urlFor(post.mainImage).url()} 
             alt={post.title} 
             fill 
             className="object-cover" 
             priority
           />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500">
        {post.body ? <PortableText value={post.body} /> : <p>No content found.</p>}
      </div>
    </article>
  );
}