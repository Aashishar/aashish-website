import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

interface BlogCardProps {
  post: any;
}

export default function BlogCard({ post }: BlogCardProps) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : "Recently Published";

  return (
    <Link href={`/blog/${post.slug.current}`} className="group relative">
      <article className="h-full flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300">

        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-xs uppercase tracking-widest">
              No Image
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <p className="text-accent font-mono text-xs uppercase tracking-[0.15em] mb-3">
            {date}
          </p>
          <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground mb-3 leading-tight group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center text-foreground font-medium text-sm group-hover:text-accent transition-colors">
            Read Article
            <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
          </div>
        </div>
      </article>
    </Link>
  );
}