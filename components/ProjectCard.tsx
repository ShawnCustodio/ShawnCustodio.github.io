import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="gradient-border group rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="shrink-0 text-sm text-muted">{project.year}</span>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="gradient-text"
          >
            Live site →
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-foreground"
          >
            Source →
          </a>
        )}
      </div>
    </div>
  );
}
