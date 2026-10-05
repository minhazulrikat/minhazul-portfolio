"use client";

const experienceMeta = {
  1: {
    label: "commit",
    value: "3b8f0e0",
    suffix: "(HEAD → main)",
  },
  2: {
    label: "commit",
    value: "d9b8eb1",
    // suffix: "(HEAD → main)",
  },
  3: {
    label: "degree",
    value: "completed",
  },
};

export default function ExperienceCard({
  experience,
  visible = false,
  delay = 0,
  reducedMotion = false,
}) {
  const accentStyle = {
    "--experience-accent": `var(--${experience.accent})`,
  };

  const meta = experienceMeta[experience.id];

  const fadeStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(8px)",
    transition: reducedMotion
      ? "none"
      : `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
  };

  return (
    <article
      style={accentStyle}
      className="group rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-300 hover:border-[var(--experience-accent)]/50 sm:p-6 lg:p-7"
    >
      {/* Top Metadata */}
      <div
        className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
        style={fadeStyle}
      >
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="text-[var(--experience-accent)]">
            {experience.period}
          </span>

          <span className="text-[var(--text-muted)]">·</span>

          <span className="text-[var(--text-muted)]">{experience.type}</span>
        </div>

        {/* Commit / Degree Badge */}
        {meta && (
          <div className="inline-flex w-fit items-center gap-1.5 rounded-[3px] border border-[var(--border)] bg-[var(--background)] px-2 py-1 font-mono text-[10px] text-[var(--text-muted)]">
            <span className="text-[var(--text-secondary)]">{meta.label}:</span>

            <span className="text-[var(--experience-accent)]">
              {meta.value}
            </span>

            {meta.suffix && (
              <span className="text-[var(--text-secondary)]">
                {meta.suffix}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Role + Company */}
      <div
        className="mt-4"
        style={{
          ...fadeStyle,
          transitionDelay: reducedMotion ? "0s" : `${delay + 0.08}s`,
        }}
      >
        <h3 className="font-mono text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
          {experience.role}
        </h3>

        <p className="mt-2 font-mono text-xs uppercase tracking-wide text-[var(--experience-accent)]">
          @ {experience.company}
        </p>
      </div>

      {/* Description */}
      <p
        className="mt-5 max-w-3xl text-sm leading-6 text-[var(--text-secondary)] sm:leading-7"
        style={{
          ...fadeStyle,
          transitionDelay: reducedMotion ? "0s" : `${delay + 0.14}s`,
        }}
      >
        {experience.description}
      </p>

      {/* Tools */}
      <div
        className="mt-6"
        style={{
          ...fadeStyle,
          transitionDelay: reducedMotion ? "0s" : `${delay + 0.2}s`,
        }}
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Tools Used:
        </p>

        <div className="flex flex-wrap gap-1.5">
          {experience.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-[3px] border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-mono text-[10px] text-[var(--experience-accent)] transition-colors duration-200 hover:border-[var(--experience-accent)] sm:text-[11px]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
