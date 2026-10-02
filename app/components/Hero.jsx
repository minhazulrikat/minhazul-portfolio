"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

const ROLES = [
  "Frontend Developer",
  "React Engineer",
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

function useTilt(ref) {
  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (mq.matches || isTouch) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();

      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      el.style.setProperty("--tilt-x", `${py * -4}deg`);
      el.style.setProperty("--tilt-y", `${px * 6}deg`);
      el.style.setProperty("--glow-x", `${(px + 0.5) * 100}%`);
      el.style.setProperty("--glow-y", `${(py + 0.5) * 100}%`);
    };

    const onLeave = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}

export default function Hero() {
  const { text: typedRole } = useTypewriter(ROLES);

  const cardRef = useRef(null);

  useTilt(cardRef);

  return (
    <section className="relative overflow-hidden pt-32">
      {/* Texture: subtle grid, faded toward the edges */}
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

      {/* Ambient glow, sits behind the code window */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1280px] items-center gap-16 px-5 pb-20 md:px-8 lg:grid-cols-12 lg:px-12">
        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            Frontend &amp; CMS Development
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-mono text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            MINHAZUL
            <br />
            ISLAM RIKAT
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl"
          >
            I build modern, responsive web experiences that turn ideas and
            designs into functional products.
          </motion.p>

          {/* Typewriter role line */}
          <motion.p
            variants={fadeUp}
            className="mt-5 flex h-5 items-center font-mono text-xs tracking-wide text-[var(--text-muted)]"
          >
            <span className="text-[var(--primary)]">&gt;</span>

            <span className="ml-2 uppercase tracking-wider text-[var(--accent)]">
              {typedRole}
            </span>

            <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[1px] animate-[blink_1s_step-end_infinite] bg-[var(--primary)]" />
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group relative overflow-hidden border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-colors"
            >
              <span className="relative z-10">View My Work →</span>

              <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--primary-hover)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <a
              href="#contact"
              className="border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
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
          <div
            ref={cardRef}
            className="relative border border-[var(--border)] bg-[var(--surface)] transition-transform duration-200 ease-out [transform-style:preserve-3d]"
            style={{
              transform:
                "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
            }}
          >
            {/* soft light that tracks the cursor */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
              style={{
                background:
                  "radial-gradient(280px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in srgb, var(--primary) 12%, transparent), transparent 70%)",
              }}
            />

            {/* Window Header */}
            <div className="relative flex h-11 items-center border-b border-[var(--border)] px-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
              </div>

              <p className="ml-4 font-mono text-[10px] text-[var(--text-muted)]">
                portfolio.jsx
              </p>
            </div>

            {/* Code */}
            <div className="relative p-6 font-mono text-xs leading-7 text-[var(--text-secondary)] sm:p-8 sm:text-sm">
              <p>
                <span className="text-purple-500">const</span>{" "}
               <span className="text-yellow-400"> developer</span> = {"{"}
              </p>

              <p className="pl-4 ">
              <span className="text-cyan-500">  name:</span>{" "}
                <span className="text-green-400">
                  "Minhazul"
                </span>
                ,
              </p>

              <p className="pl-4">
              <span className="text-cyan-500">  role:</span>{" "}
                <span className="text-green-400">
                  "{typedRole}"
                </span>
                <span className="ml-0.5 inline-block h-3 w-[6px] translate-y-[1px] animate-[blink_1s_step-end_infinite] bg-[var(--primary)]" />
                ,
              </p>

              <p className="pl-4">
               <span className="text-cyan-500"> focus:</span>{" "}
                <span className="text-green-400">
                  "Web Experiences"
                </span>
                ,
              </p>

              <p className="pl-4">
              <span className="text-cyan-500">  stack:</span> [
                <span className="text-green-400">
                  "React", "Next.js"
                </span>
                ],
              </p>

              <p>{"};"}</p>

              <div className="mt-8 border-t border-[var(--border-subtle)] pt-5">
                <p className="text-[var(--text-muted)]">
                  // turning ideas into products
                </p>

                <p className="mt-2">
                  <span className="text-purple-500">build</span>
                  <span className="text-[var(--text-primary)]">
                    (<span className="text-amber-400">ideas</span>);
                  </span>
                </p>
              </div>
            </div>
          </div>
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