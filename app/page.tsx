import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
        <p className="eyebrow mb-4">{site.role}</p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="gradient-text">{site.name}</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{site.tagline}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/projects" className="btn btn-primary">
            See my work
          </Link>
          <Link href="/resume" className="btn btn-ghost">
            View resume
          </Link>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow mb-4">About</p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{site.bio}</p>
          <p className="mt-4 text-sm text-muted">{site.location}</p>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mb-8 flex items-end justify-between">
              <p className="eyebrow">Featured work</p>
              <Link href="/projects" className="text-sm text-muted hover:text-foreground">
                All projects →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
