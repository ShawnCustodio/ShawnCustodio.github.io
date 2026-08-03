export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  degree: string;
  org: string;
  period: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Job Title",
    org: "Company Name",
    period: "2024 — Present",
    bullets: [
      "Placeholder bullet describing an outcome or responsibility.",
      "Placeholder bullet describing an outcome or responsibility.",
    ],
  },
  {
    role: "Previous Job Title",
    org: "Previous Company",
    period: "2022 — 2024",
    bullets: [
      "Placeholder bullet describing an outcome or responsibility.",
      "Placeholder bullet describing an outcome or responsibility.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Degree, Major",
    org: "School Name",
    period: "2018 — 2022",
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["TypeScript", "Python", "SQL"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js"] },
  { category: "Tools", items: ["Git", "Docker", "Figma"] },
];
