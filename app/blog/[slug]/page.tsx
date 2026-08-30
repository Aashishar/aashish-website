import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : "Recently Published";

  return (
    <div className="min-h-screen relative overflow-hidden pt-28 pb-32">

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <article className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          Back to articles
        </Link>

        {/* Post Header */}
        <div className="mb-12 border-b border-border pb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-foreground mb-8">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border bg-muted">
                <Image src="/me.jpg" alt="Aashish Aryal" width={40} height={40} className="object-cover" />
              </div>
              <span className="text-foreground">Aashish Aryal</span>
            </div>

            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-border"></div>

            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-muted-foreground" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {post.mainImage && (
          <div className="relative aspect-video w-full mb-16 rounded-2xl overflow-hidden border border-border bg-muted shadow-xl">
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
        <div className="prose prose-lg md:prose-xl max-w-none
          text-muted-foreground
          prose-headings:font-display
          prose-headings:text-foreground
          prose-headings:tracking-[-0.02em]
          prose-a:text-accent hover:prose-a:text-accent-secondary
          prose-strong:text-foreground
          prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
          prose-img:rounded-2xl prose-img:border prose-img:border-border"
        >
          {post.body ? <PortableText value={post.body} /> : <p>No content found.</p>}
        </div>

      </article>
    </div>
  );
}