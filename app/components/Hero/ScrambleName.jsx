"use client";

import { useEffect, useState } from "react";

const CHARACTERS = [
  // Pixel / dot patterns
 

  "⣶",
  "⣤",
  

  // Digital blocks
  "▦",
  

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

  // Technical symbols
  "⌁",
  "≋",
  "⌘",
  "∞",

  // A few classic scramble characters
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
  // Start with the actual name.
  // This prevents random characters from appearing on initial render.
  const [displayLines, setDisplayLines] = useState(
    NAME_LINES.map((line) => line.split("")),
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setDisplayLines(NAME_LINES.map((line) => line.split("")));
      return;
    }

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
              // Keep spaces untouched.
              if (char === " ") return " ";

              // Characters resolve from left to right.
              const resolveAt = index * 2 + 8;

              return frame >= resolveAt
                ? char
                : randomCharacter();
            }),
          ),
        );

        // Finish the scramble.
        if (frame >= maxLength * 2 + 10) {
          window.clearInterval(intervalId);

          setDisplayLines(
            NAME_LINES.map((line) => line.split("")),
          );

          // Wait before starting the next scramble.
          timeoutId = window.setTimeout(runScramble, 8000);
        }
      }, 65);
    };

    // Initial delay after page load.
    timeoutId = window.setTimeout(runScramble, 3000);

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
    <span
  className="block text-[clamp(3rem,7vw,5rem)] leading-[0.95] text-[var(--text-primary)]"
>
  {displayLines[0].map((char, index) => (
    <span
      key={`first-${index}`}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</span>

{/* ISLAM RIKAT */}
<span
  className="block text-[clamp(3rem,7vw,5rem)] leading-[0.95] text-[var(--primary)]"
>
  {displayLines[1].map((char, index) => (
    <span
      key={`second-${index}`}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</span>
    </div>
  );
}