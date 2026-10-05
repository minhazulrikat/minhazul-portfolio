const processSteps = [
  {
    number: "01",
    stage: "INIT",
    title: "Understand",
    description:
      "Understand the goal, requirements, users and constraints before starting the implementation.",
  },
  {
    number: "02",
    stage: "ARCH",
    title: "Design",
    description:
      "Translate the idea or design into a clear interface structure with responsive behavior in mind.",
  },
  {
    number: "03",
    stage: "BUILD",
    title: "Build",
    description:
      "Develop the experience with clean, reusable components and a focus on functionality and responsiveness.",
  },
  {
    number: "04",
    stage: "DEPLOY",
    title: "Refine",
    description:
      "Test the experience, fix issues and polish the details until everything feels complete.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background)] scroll-mt-24"
    >     

      <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
              {"//"} 06 / WORKFLOW PIPELINE
            </p>

            <h2 className="mt-3 font-mono text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl">
              How I Work
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-xl text-sm leading-6 text-[var(--text-secondary)] md:text-base md:leading-7">
              A straightforward, iterative process that keeps projects
              focused, functional, and refined from the first idea to the
              final result.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-300 hover:border-[var(--primary)]/60 sm:p-6"
            >
              {/* Step Metadata */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-wide text-[var(--primary)]">
                  {step.number}.
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {step.stage}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="mt-7 font-mono text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}