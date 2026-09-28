"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = ["Frontend Developer", "React Engineer", "CMS Specialist", "UI Craftsman"];

function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
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
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {/* Ambient glow, sits behind the code window */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--primary)" }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1280px] items-center gap-16 px-5 pb-20 md:px-8 lg:grid-cols-12 lg:px-12">
        {/* Hero Content */}
        <div className="lg:col-span-7 animate-[fadeUp_0.7s_ease-out_both]">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
            Frontend &amp; CMS Development
          </p>

          <h1 className="font-mono text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl md:text-7xl lg:text-8xl">
            MINHAZUL
            <br />
            ISLAM RIKAT
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
            I build modern, responsive web experiences that turn ideas and
            designs into functional products.
          </p>

          {/* Typewriter role line */}
          <p className="mt-5 flex h-5 items-center font-mono text-xs tracking-wide text-[var(--text-muted)]">
            <span className="text-[var(--primary)]">&gt;</span>
            <span className="ml-2 text-[var(--text-secondary)] uppercase text-sm tracking-widest ">{typedRole}</span>
            <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[1px] animate-[blink_1s_step-end_infinite] bg-[var(--primary)]" />
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
          </div>
        </div>

        {/* Hero Visual */}
        <div className="lg:col-span-5 animate-[fadeUp_0.7s_ease-out_0.15s_both]">
          <div
            ref={cardRef}
            className="relative border border-[var(--border)] bg-[var(--surface)] transition-transform duration-200 ease-out [transform-style:preserve-3d]"
            style={{
              transform: "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
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
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]" />
              </div>

              <p className="ml-4 font-mono text-[10px] text-[var(--text-muted)]">
                portfolio.jsx
              </p>
            </div>

            {/* Code */}
            <div className="relative p-6 font-mono text-xs leading-7 text-[var(--text-secondary)] sm:p-8 sm:text-sm">
              <p>
                <span className="text-[var(--primary)]">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-4">
                name: <span className="text-[var(--text-primary)]">"Minhazul"</span>,
              </p>

              <p className="pl-4">
                role: <span className="text-[var(--text-primary)]">"{typedRole}"</span>
                <span className="ml-0.5 inline-block h-3 w-[6px] translate-y-[1px] animate-[blink_1s_step-end_infinite] bg-[var(--primary)]" />
                ,
              </p>

              <p className="pl-4">
                focus: <span className="text-[var(--text-primary)]">"Web Experiences"</span>,
              </p>

              <p className="pl-4">
                stack: [
                <span className="text-[var(--text-primary)]">"React", "Next.js"</span>
                ],
              </p>

              <p>{"};"}</p>

              <div className="mt-8 border-t border-[var(--border-subtle)] pt-5">
                <p className="text-[var(--text-muted)]">// turning ideas into products</p>
                <p className="mt-2">
                  <span className="text-[var(--primary)]">build</span>
                  <span className="text-[var(--text-primary)]">(ideas);</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeUp_0\\.7s_ease-out_both\\],
          .animate-\\[fadeUp_0\\.7s_ease-out_0\\.15s_both\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}