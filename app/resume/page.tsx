import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { experience, education, skills } from "@/data/resume";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <PageHeader eyebrow="Background" title="Resume" />
        <a href={site.resumeUrl} className="btn btn-ghost" download>
          Download PDF
        </a>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-semibold">Experience</h2>
        <div className="flex flex-col gap-10">
          {experience.map((item) => (
            <div key={`${item.role}-${item.org}`}>
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">
                  {item.role} · <span className="text-muted">{item.org}</span>
                </h3>
                <span className="text-sm text-muted">{item.period}</span>
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-semibold">Education</h2>
        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.org}`}
              className="flex flex-wrap items-baseline justify-between gap-2"
            >
              <h3 className="font-medium">
                {item.degree} · <span className="text-muted">{item.org}</span>
              </h3>
              <span className="text-sm text-muted">{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-medium text-muted">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-2.5 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
