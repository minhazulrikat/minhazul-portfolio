const experiences = [
  {
    id: 1,
    period: "2024 — PRESENT",
    role: "Frontend & CMS Developer",
    company: "Softvance Delta",
    description:
      "Building responsive websites and digital experiences from design through implementation, with a focus on frontend development and CMS-based solutions.",
  },
  {
    id: 2,
    period: "2020 — 2024",
    role: "Frontend Developer",
    company: "Creative IT",
    description:
      "Worked on responsive web interfaces, implemented designs and contributed to building functional web experiences.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      {/* Section Header */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
            03 / Experience
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--text-primary)] md:text-6xl">
            Experience
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Experience building and delivering modern web experiences across
            frontend development, CMS platforms and client projects.
          </p>
        </div>
      </div>

      {/* Experience List */}
      <div className="mt-20 border-t border-[var(--border)]">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="grid gap-6 border-b border-[var(--border)] py-10 md:grid-cols-12 md:gap-8"
          >
            {/* Period */}
            <div className="md:col-span-3">
              <p className="font-mono text-xs tracking-wide text-[var(--text-muted)]">
                {experience.period}
              </p>
            </div>

            {/* Main Information */}
            <div className="md:col-span-6">
              <h3 className="text-2xl font-medium tracking-tight text-[var(--text-primary)]">
                {experience.role}
              </h3>

              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-[var(--primary)]">
                {experience.company}
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-3">
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}