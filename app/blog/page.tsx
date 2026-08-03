import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        subtitle="Notes on what I'm building, learning, and thinking about."
      />

      <div className="flex flex-col divide-y divide-border border-t border-border">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h2 className="text-lg font-medium group-hover:gradient-text">{post.title}</h2>
              {post.excerpt && <p className="mt-1 text-sm text-muted">{post.excerpt}</p>}
            </div>
            <span className="shrink-0 text-sm text-muted">{post.date}</span>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="py-8 text-muted">No posts yet — add one in content/blog/.</p>
        )}
      </div>
    </div>
  );
}
