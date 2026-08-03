export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "Placeholder description. Explain what this project is, the problem it solves, and your role in building it.",
    tags: ["TypeScript", "Next.js"],
    year: "2026",
    featured: true,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-one",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "Placeholder description. Explain what this project is, the problem it solves, and your role in building it.",
    tags: ["Python", "Machine Learning"],
    year: "2025",
    featured: true,
    repoUrl: "https://github.com/yourusername/project-two",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "Placeholder description. Explain what this project is, the problem it solves, and your role in building it.",
    tags: ["React", "Design"],
    year: "2025",
    repoUrl: "https://github.com/yourusername/project-three",
  },
];
