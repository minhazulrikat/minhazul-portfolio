"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";
import TimelineDot from "./TimelineDot";

function useInViewOnce(
  ref,
  { threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {},
) {
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
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return {
    inView,
    reducedMotion,
  };
}

export default function ExperienceTimeline() {
  const timelineRef = useRef(null);

  const { inView, reducedMotion } = useInViewOnce(timelineRef);

  const lineDuration = 0.6 + experiences.length * 0.45;

  return (
    <div ref={timelineRef} className="relative mt-16 pl-8 md:mt-20 md:pl-16">
      {/* Base timeline line */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-0 top-2 w-px opacity-30"
        style={{
          background:
            "linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 50%, var(--tertiary) 100%)",
        }}
      />

      {/* Animated timeline line */}
      <div
       aria-hidden="true"
  className="absolute bottom-2 left-0 top-2 w-px origin-top opacity-70"
  style={{
    background:
      "linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 50%, var(--tertiary) 100%)",
    transform: inView
      ? "scaleY(1)"
      : "scaleY(0)",
    transition: reducedMotion
      ? "none"
      : `transform ${lineDuration}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
  }}
      />

      <ol className="m-0 list-none space-y-10 p-0 sm:space-y-12 lg:space-y-14">
        {experiences.map((experience, index) => {
          const accentStyle = {
            "--experience-accent": `var(--${experience.accent})`,
          };
          const dotDelay = reducedMotion ? 0 : 0.3 + index * 0.45;

          const cardDelay = reducedMotion ? 0 : dotDelay + 0.15;

          return (
            <li key={experience.id} className="relative" style={accentStyle}>
              {/* Timeline dot */}
              <TimelineDot
                accent={experience.accent}
                active={index === 0}
                visible={inView}
                delay={dotDelay}
                reducedMotion={reducedMotion}
              />

              {/* Connector from timeline to card */}
              <span
                aria-hidden="true"
                className="absolute -left-8 top-[8px] h-px w-8 bg-[var(--experience-accent)] md:-left-16 md:w-16"
                style={{
                  opacity: inView ? 0.35 : 0,
                  transition: reducedMotion
                    ? "none"
                    : `opacity 0.4s ease-out ${dotDelay}s`,
                }}
              />

              {/* Experience card */}
              <ExperienceCard
                experience={experience}
                visible={inView}
                delay={cardDelay}
                reducedMotion={reducedMotion}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
