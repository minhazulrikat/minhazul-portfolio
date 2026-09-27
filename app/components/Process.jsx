const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the goal, requirements, users and constraints before starting the implementation.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Translate the idea or design into a clear interface structure with responsive behavior in mind.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the experience with clean, reusable components and a focus on functionality and responsiveness.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Test the experience, fix issues and polish the details until everything feels complete.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      {/* Header */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
            06 / Process
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--text-primary)] md:text-6xl">
            How I Work
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A straightforward process that keeps projects focused, functional
            and refined from the first idea to the final result.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="mt-20 grid border-t border-[var(--border)] md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article
            key={step.number}
            className={`
      border-b border-[var(--border)] py-8
      md:px-8
      ${index % 2 === 0 ? "md:border-r" : ""}
      ${index < 3 ? "lg:border-r" : ""}
      lg:border-b-0
    `}
          >
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--primary)]">
              {step.number}
            </p>

            <h3 className="mt-8 text-2xl font-medium tracking-tight text-[var(--text-primary)]">
              {step.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
