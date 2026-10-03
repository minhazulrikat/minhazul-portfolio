"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../animations";
import DeveloperCodeWindow from "./DeveloperCodeWindow";

const ROLES = [
  "Frontend Developer",
  "React Developer",
  "CMS Specialist",
  "UI Craftsman",
];

function useTypewriter(
  words,
  { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {},
) {
  const [text, setText] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mq.matches) {
      setText(words[0]);
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const current = words[wordIndex];

      if (!deleting) {
        charIndex++;

        setText(current.slice(0, charIndex));

        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }

        timeoutId = setTimeout(tick, typeSpeed);
      } else {
        charIndex--;

        setText(current.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }

        timeoutId = setTimeout(tick, deleteSpeed);
      }
    };

    timeoutId = setTimeout(tick, typeSpeed);

    return () => clearTimeout(timeoutId);
  }, [words, typeSpeed, deleteSpeed, pause]);

  return { text };
}

export default function Hero() {
  const { text: typedRole } = useTypewriter(ROLES);

  return (
    <section id="hero" className="relative overflow-hidden pt-32">
      {/* Hero Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {/* Ambient Glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{
          background: "var(--accent)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1280px] items-center gap-14 px-5 pb-20 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        {/* -------------------------------- */}
        {/* Left Content */}
        {/* -------------------------------- */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          {/* Small developer label */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center rounded-[5px] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-[10px]"
          >
            <span className="text-[var(--code-green)]">const</span>

            <span className="mx-1.5 text-[var(--text-secondary)]">role</span>

            <span className="text-[var(--text-muted)]">=</span>

            <span className="ml-1.5 text-[var(--code-yellow)]">
              "Frontend & CMS Developer"
            </span>

            <span className="ml-1 text-[var(--text-muted)]">;</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-mono text-[clamp(2.7rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
          >
            <span className="block text-[var(--text-primary)]">MINHAZUL</span>

            <span className="block text-[var(--primary)]">ISLAM RIKAT</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[620px] text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
          >
            I turn ideas and designs into modern, responsive web experiences—built with clean code, thoughtful interactions, and scalable frontend architecture.
          </motion.p>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp}
            className="mt-5 flex h-5 items-center font-mono text-xs tracking-wide"
          >
            <span className="text-[var(--primary)]">&gt;</span>

            <span className="ml-2 uppercase tracking-wider text-[var(--accent)]">
              {typedRole}
            </span>

            <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[1px] animate-[blink_1s_step-end_infinite] bg-[var(--primary)]" />
          </motion.div>

          {/* Divider / technical metadata */}
         <motion.div
  variants={fadeUp}
  className="mt-7 flex max-w-[700px] flex-wrap items-center gap-x-4 gap-y-2 border-y border-[var(--border-subtle)] py-3 font-mono text-[11px] leading-5 text-[var(--text-secondary)] sm:text-xs"
>
  <span>
    <span className="text-[var(--primary)]">
      #
    </span>{" "}
    1+ Years Exp
  </span>

  <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />

  <span>
    <span className="text-[var(--primary)]">
      #
    </span>{" "}
    React, Next.js, Tailwind CSS
  </span>

  <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />

  <span>
    <span className="text-[var(--primary)]">
      #
    </span>{" "}
    Bangladesh · Remote Ready
  </span>
</motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-[6px] border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 font-mono text-[11px] font-medium text-[var(--background)] transition-colors duration-200 hover:bg-[var(--primary-hover)]"
            >
              <span>VIEW SELECTED WORK</span>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M4 10H16M11 5L16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="rounded-[6px] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-mono text-[11px] font-medium text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* -------------------------------- */}
        {/* Developer Code Window */}
        {/* -------------------------------- */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="lg:col-span-5"
        >
          <DeveloperCodeWindow />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
