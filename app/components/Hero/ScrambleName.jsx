"use client";

import { useEffect, useState } from "react";

const CHARACTERS = [
  // Pixel / dot patterns
  "⠿",
  "⣿",
  "⣶",
  "⣤",
  "⣀",

  // Digital blocks
  "▦",
  "▧",
  "▨",
  "▩",
  "▪",
  "▫",
  "◾",
  "◽",

  // Geometric
  "◆",
  "◇",
  "◈",
  "◉",
  "◎",
  "○",

  // Light / sparkle
  "✦",
  "✧",
  "✶",
  "⊹",
  "⟡",

  // Technical
  "⌁",
  "≋",
  "⌘",
  "∞",

  // Classic scramble
  "@",
  "#",
  "*",
  "+",
  "=",
  "/",
  "\\",
  "<",
  ">",
  "[",
  "]",
];

const NAME_LINES = ["MINHAZUL", "ISLAM RIKAT"];

function randomCharacter() {
  return CHARACTERS[
    Math.floor(Math.random() * CHARACTERS.length)
  ];
}

export default function ScrambleName() {
  const [displayLines, setDisplayLines] = useState(
    NAME_LINES.map((line) => line.split("")),
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    let timeoutId;
    let intervalId;

    const runScramble = () => {
      let frame = 0;

      const maxLength = Math.max(
        ...NAME_LINES.map((line) => line.length),
      );

      intervalId = window.setInterval(() => {
        frame += 1;

        setDisplayLines(
          NAME_LINES.map((line) =>
            line.split("").map((char, index) => {
              if (char === " ") return " ";

              const resolveAt = index * 2 + 8;

              return frame >= resolveAt
                ? char
                : randomCharacter();
            }),
          ),
        );

        if (frame >= maxLength * 2 + 10) {
          window.clearInterval(intervalId);

          setDisplayLines(
            NAME_LINES.map((line) => line.split("")),
          );

          timeoutId = window.setTimeout(
            runScramble,
            8000,
          );
        }
      }, 65);
    };

    // Initial delay
    timeoutId = window.setTimeout(runScramble, 8000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      aria-label="Minhazul Islam Rikat"
      className="font-mono font-medium tracking-[-0.04em]"
    >
      {/* MINHAZUL */}
      <div
        className="flex h-[clamp(2.85rem,6.65vw,4.75rem)] items-center text-[clamp(3rem,7vw,5rem)] leading-none text-[var(--text-primary)]"
      >
        {displayLines[0].map((char, index) => (
          <span
            key={`first-${index}`}
            className="inline-flex h-full w-[0.62em] shrink-0 items-center justify-center leading-none"
          >
            {char}
          </span>
        ))}
      </div>

      {/* ISLAM RIKAT */}
      <div
        className="flex h-[clamp(2.85rem,6.65vw,4.75rem)] items-center text-[clamp(3rem,7vw,5rem)] leading-none text-[var(--primary)]"
      >
        {displayLines[1].map((char, index) => (
          <span
            key={`second-${index}`}
            className={`inline-flex h-full shrink-0 items-center justify-center leading-none ${
              char === " "
                ? "w-[0.31em]"
                : "w-[0.62em]"
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}