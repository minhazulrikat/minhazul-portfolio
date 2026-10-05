export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background)] scroll-mt-24"
    >
      {/* Subtle technical grid */}
     

      <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Section Label */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
              {"//"} 04 / ABOUT
            </p>

            <h2 className="mt-4 font-mono text-4xl font-medium tracking-tight text-[var(--text-primary)] md:text-6xl">
              About Me
            </h2>

            <p className="mt-6 font-mono text-xs text-[var(--text-muted)]">
              <span className="text-[var(--tertiary)]">&gt;</span>{" "}
              cat about_rikat.md
            </p>
          </div>

          {/* About Content */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
              <p>
                I&apos;m a frontend and CMS developer focused on building
                modern, responsive, and polished web experiences that look
                sharp and perform with purpose.
              </p>

              <p className="text-[var(--text-muted)]">
                I enjoy turning ideas and designs into functional interfaces,
                paying attention to the details that make a product feel
                clear, intuitive, and complete. My background in Computer
                Science enables me to write cleaner code, maintain structure,
                and handle edge cases before they surface.
              </p>

              <p className="text-[var(--text-muted)]">
                My work combines frontend development, UI implementation, and
                CMS-based solutions, with a continuous focus on improving my
                technical skills and building better products for clients and
                companies globally.
              </p>
            </div>

            {/* Focus / Approach */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[7px] border border-[var(--border)] bg-[var(--surface)] px-4 py-4 transition-colors duration-300 hover:border-[var(--primary)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Focus
                </p>

                <p className="mt-2 font-mono text-sm font-medium text-[var(--primary)]">
                  Frontend &amp; Modern Web Experiences
                </p>
              </div>

              <div className="rounded-[7px] border border-[var(--border)] bg-[var(--surface)] px-4 py-4 transition-colors duration-300 hover:border-[var(--tertiary)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Approach
                </p>

                <p className="mt-2 font-mono text-sm font-medium text-[var(--tertiary)]">
                  Clean · Responsive · Functional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}