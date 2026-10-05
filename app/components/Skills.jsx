const skillGroups = [
  {
    number: "01",
    title: "FRONTEND CORE",
    accent: "primary",
    accentSkills: ["JavaScript (ES6+)", "React.js", "Next.js"],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "TypeScript",
    ],
  },
  {
    number: "02",
    title: "CMS & NO-CODE",
    accent: "tertiary",
    accentSkills: ["Wix Studio", "Framer"],
    skills: ["Wix Studio", "Framer", "Squarespace", "Headless CMS"],
  },
  {
    number: "03",
    title: "TOOLS & WORKFLOW",
    accent: "secondary",
    accentSkills: ["Git", "GitHub"],
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "npm / pnpm"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background)] scroll-mt-24"
    >
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="page-grid pointer-events-none absolute inset-0 opacity-[0.32]"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
              {"//"} 05 / SKILLS &amp; TECHNOLOGIES
            </p>

            <h2 className="mt-3 font-mono text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl">
              Skills Matrix
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-xl text-sm leading-6 text-[var(--text-secondary)] md:text-base md:leading-7">
              Technologies and tools I use to design, build and deliver modern
              web experiences.
            </p>
          </div>
        </div>

        {/* Skill Groups */}
        <div className="mt-14 grid gap-5 md:mt-16 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              style={{
                "--skill-accent": `var(--${group.accent})`,
              }}
              className="group rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--skill-accent)]/60"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 rounded-[3px] bg-[var(--skill-accent)]"
                  />

                  <h3 className="font-mono text-sm font-semibold tracking-wide text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                </div>

                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  {group.number}
                </span>
              </div>

              {/* Divider */}
              <div className="mt-5 h-px w-full bg-[var(--border)]" />

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const isAccent = group.accentSkills.includes(skill);

                  return (
                    <span
                      key={skill}
                      className={`rounded-[3px] border px-3 py-1.5 font-mono text-[11px] transition-colors duration-200 sm:text-xs bg-[var(--surface-elevated)] ${
                        isAccent
                          ? "border-[var(--skill-accent)]/30 bg-[var(--skill-accent)]/[0.04] text-[var(--skill-accent)]"
                          : "border-[var(--border)] bg-[var(--background)] text-[var(--text-secondary)]"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
