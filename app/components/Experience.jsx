"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/experiences";
import "../globals.css";
/**
 * Fires `true` once when the element enters the viewport, then stops observing.
 * Returns `true` immediately (no animation) if the user prefers reduced motion.
 */
function useInViewOnce(ref, { threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {}) {
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return { inView, reducedMotion };
}

export default function Experience() {
  const timelineRef = useRef(null);
  const { inView, reducedMotion } = useInViewOnce(timelineRef);

  // Total time it takes the line to "draw" all the way down, scaled to item count.
  const lineDuration = 0.6 + experiences.length * 0.45;

  return (
    <section
      id="experience"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      {/* Section Header */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            03 / Experience & Education
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

      {/* Timeline */}
      <div ref={timelineRef} className="relative mt-20 pl-8 md:pl-16">
        {/* Base line — always visible, works even if JS/animation is off. Muted so the dots stay the strongest accent. */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-2 bottom-2 w-px bg-[var(--accent)] opacity-[0.18]"
        />

        {/* Animated overlay line — draws downward once, on entering viewport, at full strength */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-2 bottom-2 w-px origin-top bg-[var(--accent)]"
          style={{
            transform: inView ? "scaleY(1)" : "scaleY(0)",
            transition: reducedMotion
              ? "none"
              : `transform ${lineDuration}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
          }}
        />

        <ol className="list-none pl-0 m-0">
          {experiences.map((experience, index) => {
            const dotDelay = reducedMotion ? 0 : 0.3 + index * 0.45;
            const contentDelay = dotDelay + 0.15;
            const tagsDelay = contentDelay + 0.1;

            const fadeStyle = (delay) => ({
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(8px)",
              transition: reducedMotion
                ? "none"
                : `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
            });

            return (
              <li
                key={experience.id}
                className="relative pb-14 last:pb-0 md:grid md:grid-cols-12 md:gap-8"
              >
                {/* Dot — the anchor point for this entry */}
                <span
                id="dot"
                  aria-hidden="true"
                  className="absolute md:-left-15 top-[3px] h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent)] -left-7 "
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView
                      ? "translateX(-50%) scale(1)"
                      : "translateX(-50%) scale(0.4)",
                    transition: reducedMotion
                      ? "none"
                      : `opacity 0.4s ease-out ${dotDelay}s, transform 0.4s ease-out ${dotDelay}s`,
                  }}
                />

                {/* Tick — connects the dot to the content, same width as the gutter so it reaches exactly to the text */}
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-[7px] h-px w-8 bg-[var(--primary)] opacity-30 md:-left-16 md:w-16"
                  style={{
                    opacity: inView ? 0.3 : 0,
                    transition: reducedMotion ? "none" : `opacity 0.4s ease-out ${dotDelay}s`,
                  }}
                />

                {/* Period */}
                <div className="md:col-span-3">
                  <p
                    className="font-mono text-xs tracking-wide text-[var(--text-muted)]"
                    style={fadeStyle(contentDelay)}
                  >
                    {experience.period}
                  </p>
                </div>

                {/* Role + Company */}
                <div className="mt-2 md:col-span-6 md:mt-0">
                  <h3
                    className="text-2xl font-medium tracking-tight text-[var(--text-primary)]"
                    style={fadeStyle(contentDelay)}
                  >
                    {experience.role}
                  </h3>

                  <p
                    className="mt-2 font-mono text-xs uppercase tracking-wide text-[var(--accent)]"
                    style={fadeStyle(contentDelay)}
                  >
                    {experience.company}
                  </p>
                </div>

                {/* Description */}
                <div className="mt-4 md:col-span-3 md:mt-0">
                  <p
                    className="text-sm leading-6 text-[var(--text-secondary)]"
                    style={fadeStyle(contentDelay)}
                  >
                    {experience.description}
                  </p>
                </div>

                {/* Tools Used */}
                <div className="mt-6 md:col-span-9 md:col-start-4">
                  <p
                    className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]"
                    style={fadeStyle(tagsDelay)}
                  >
                    Tools Used
                  </p>

                  <div className="flex flex-wrap gap-2" style={fadeStyle(tagsDelay)}>
                    {experience.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-[var(--border)] bg-transparent px-3 py-1.5 font-mono text-[11px] text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}