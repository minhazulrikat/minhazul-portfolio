export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      <div className="grid gap-12 border-t border-[var(--border)] pt-12 lg:grid-cols-12 lg:gap-16">
        {/* Section Label */}
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            04 / About
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--text-primary)] md:text-6xl">
            About
          </h2>
        </div>

        {/* About Content */}
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-6 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            <p>
              I&apos;m a frontend and CMS developer focused on building modern,
              responsive and polished web experiences.
            </p>

            <p>
              I enjoy turning ideas and designs into functional interfaces,
              paying attention to the details that make a product feel clear,
              intuitive and complete.
            </p>

            <p>
              My work combines frontend development, UI implementation and
              CMS-based solutions, with a continuous focus on improving my
              technical skills and building better products.
            </p>
          </div>

          {/* Small Details */}
          <div className="mt-12 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                Focus
              </p>

              <p className="mt-2 text-sm text-[var(--text-primary)]">
                Frontend Development
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                Approach
              </p>

              <p className="mt-2 text-sm text-[var(--text-primary)]">
                Clean · Responsive · Functional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}