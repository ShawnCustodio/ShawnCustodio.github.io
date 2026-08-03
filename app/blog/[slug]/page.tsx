import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="mb-8 inline-block text-sm text-muted hover:text-foreground">
        ← Back to blog
      </Link>

      <p className="eyebrow mb-3">{post.date}</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>

      {post.tags.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:gradient-text"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
