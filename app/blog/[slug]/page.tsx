import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft, Calendar} from "lucide-react";
import {PortableText} from "@portabletext/react";

import {client, urlFor} from "@/sanity/lib/client";

interface PageProps {
  params: Promise<{slug: string}>;
}

interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  seoTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  publishedAt?: string;
  body?: any[];
  mainImage?: {
    asset: unknown;
    alt?: string;
  };
  author?: {
    name?: string;
    image?: unknown;
  };
}

const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    seoTitle,
    metaDescription,
    primaryKeyword,
    secondaryKeywords,
    publishedAt,
    body,
    mainImage {
      asset,
      alt
    },
    author-> {
      name,
      image
    }
  }
`;

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(POST_QUERY, {slug});
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {slug} = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.seoTitle || post.title;
  const description =
    post.metaDescription ||
    post.excerpt ||
    `Read ${post.title} by Aashish Aryal.`;

  const canonicalUrl = `https://www.aryalashish.com.np/blog/${post.slug}`;

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(630)
        .fit("crop")
        .url()
    : undefined;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    keywords: [
      post.primaryKeyword,
      ...(post.secondaryKeywords || []),
    ].filter((keyword): keyword is string => Boolean(keyword)),

    authors: [
      {
        name: post.author?.name || "Aashish Aryal",
        url: "https://www.aryalashish.com.np",
      },
    ],

    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      siteName: "Aashish Aryal",
      publishedTime: post.publishedAt,
      authors: ["Aashish Aryal"],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt || post.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPost({params}: PageProps) {
  const {slug} = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recently Published";

  return (
    <div className="relative min-h-screen overflow-hidden pb-32 pt-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[150px]" />

      <article className="relative z-10 mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="mb-12 inline-flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={20} />
          Back to articles
        </Link>

        <header className="mb-12 border-b border-border pb-12">
          <h1 className="mb-8 font-display text-4xl leading-[1.1] tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 font-medium text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-muted">
                <Image
                  src="/me.jpg"
                  alt={post.author?.name || "Aashish Aryal"}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <span className="text-foreground">
                {post.author?.name || "Aashish Aryal"}
              </span>
            </div>

            <div className="hidden h-1.5 w-1.5 rounded-full bg-border md:block" />

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <time dateTime={post.publishedAt}>{date}</time>
            </div>
          </div>
        </header>

        {post.mainImage && (
          <div className="relative mb-16 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
            <Image
              src={urlFor(post.mainImage)
                .width(1200)
                .height(675)
                .fit("crop")
                .url()}
              alt={post.mainImage.alt || post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="
            prose prose-lg max-w-none text-muted-foreground
            prose-headings:font-display
            prose-headings:tracking-[-0.02em]
            prose-headings:text-foreground
            prose-a:text-accent
            hover:prose-a:text-accent-secondary
            prose-strong:text-foreground
            prose-blockquote:rounded-r-lg
            prose-blockquote:border-accent
            prose-blockquote:bg-accent/5
            prose-blockquote:px-4
            prose-blockquote:py-1
            prose-img:rounded-2xl
            prose-img:border
            prose-img:border-border
            md:prose-xl
          "
        >
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p>No content found.</p>
          )}
        </div>
      </article>
    </div>
  );
}