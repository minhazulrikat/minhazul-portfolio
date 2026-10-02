const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "daisyUI",
    ],
  },
  {
    title: "CMS",
    skills: [
      "Wix",
      "Framer",
      "Squarespace",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            05 / Skills
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--text-primary)] md:text-6xl">
            Skills
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Technologies and tools I use to design, build and deliver modern
            web experiences.
          </p>
        </div>
      </div>

      {/* Skill Groups */}
      <div className="mt-20 border-t border-[var(--border)]">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-6 border-b border-[var(--border)] py-8 md:grid-cols-12 md:gap-8"
          >
            {/* Group Name */}
            <div className="md:col-span-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-primary)]">
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 md:col-span-8 md:col-start-5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[var(--border)] px-4 py-2 font-mono text-xs text-[var(--accent)]/80 transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}