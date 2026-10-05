"use client";

import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[#0B1018] scroll-mt-24"
    >
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="page-grid pointer-events-none absolute inset-0 opacity-[0.32]"
      />

      {/* Section Content */}
      <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
              {"//"} 03 {"/"} Experience & Education
            </p>

            <h2 className="mt-4 font-mono text-4xl font-medium tracking-tight text-[var(--text-primary)] md:text-6xl">
              Experience
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
              Experience building and delivering modern web
              experiences across frontend development, CMS
              platforms and client projects.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <ExperienceTimeline />
      </div>
    </section>
  );
}