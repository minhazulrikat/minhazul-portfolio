"use client";

import { useEffect, useRef } from "react";

function useTilt(ref) {
  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const isTouch = window.matchMedia(
      "(pointer: coarse)",
    ).matches;

    if (mq.matches || isTouch) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();

      const px =
        (e.clientX - rect.left) / rect.width - 0.5;

      const py =
        (e.clientY - rect.top) / rect.height - 0.5;

      el.style.setProperty(
        "--tilt-x",
        `${py * -4}deg`,
      );

      el.style.setProperty(
        "--tilt-y",
        `${px * 6}deg`,
      );

      el.style.setProperty(
        "--glow-x",
        `${(px + 0.5) * 100}%`,
      );

      el.style.setProperty(
        "--glow-y",
        `${(py + 0.5) * 100}%`,
      );
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

export default function DeveloperCodeWindow() {
  const cardRef = useRef(null);

  useTilt(cardRef);

  return (
    <div
      ref={cardRef}
      className="relative w-full min-w-0 overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--surface)] transition-transform duration-200 ease-out [transform-style:preserve-3d]"
      style={{
        transform:
          "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
      }}
    >
      {/* Cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in srgb, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />

      {/* Window Header */}
      <div className="relative z-20 flex h-10 min-w-0 items-center border-b border-[var(--border)] bg-[var(--surface-elevated)] px-3 sm:px-4">
        {/* Traffic lights */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--workspace-window-red)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--workspace-window-yellow)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--workspace-window-green)]" />
        </div>

        {/* Active tab */}
        <div className="ml-4 flex h-6 min-w-0 max-w-[190px] items-center rounded-[4px] border border-[var(--border)] bg-[var(--background)] px-2.5 sm:ml-5 sm:max-w-none sm:px-3">
          <span className="mr-2 shrink-0 text-[var(--code-orange)]">
            ⚡
          </span>

          <span className="truncate font-mono text-[10px] text-[var(--text-secondary)]">
            DeveloperProfile.ts
          </span>
        </div>

        {/* Language */}
        <span className="ml-auto shrink-0 pl-3 font-mono text-[10px] text-[var(--text-secondary)]">
          TypeScript
        </span>
      </div>

      {/* Editor */}
      <div className="relative z-20 w-full overflow-hidden bg-[var(--background)] px-3 py-4 sm:px-5 sm:py-4">
        <div className="w-full min-w-0 font-mono text-[11px] leading-[1.65]">
          {/* Line 01 */}
          <CodeLine number="01">
            <Keyword>interface</Keyword>{" "}
            <Type>FrontendDeveloper</Type>{" "}
            {"{"}
          </CodeLine>

          {/* Line 02 */}
          <CodeLine number="02" indent>
            <Property>focus:</Property>{" "}
            <Type>string</Type>;
          </CodeLine>

          {/* Line 03 */}
          <CodeLine number="03" indent>
            <Property>stack:</Property>{" "}
            <Type>string[]</Type>;
          </CodeLine>

          {/* Line 04 */}
          <CodeLine number="04" indent>
            <Property>principles:</Property>{" "}
            <Type>string[]</Type>;
          </CodeLine>

          {/* Line 05 */}
          <CodeLine number="05">
            {"}"}
          </CodeLine>

          {/* Line 06 */}
          <CodeLine number="06">
            &nbsp;
          </CodeLine>

          {/* Line 07 */}
          <CodeLine number="07">
            <Keyword>const</Keyword>{" "}
            <Variable>developer</Variable>{" "}
            <Operator>=</Operator>{" "}
            {"{"}
          </CodeLine>

          {/* Line 08 */}
          <CodeLine number="08" indent>
            <Property>focus:</Property>{" "}
            <String>
              "Modern web experiences"
            </String>
            ,
          </CodeLine>

          {/* Line 09 */}
          <CodeLine number="09" indent>
            <Property>stack:</Property> [
          </CodeLine>

          {/* Line 10 */}
          <CodeLine number="10" doubleIndent>
            <String>"React"</String>,{" "}
            <String>"Next.js"</String>,
          </CodeLine>

          {/* Line 11 */}
          <CodeLine number="11" doubleIndent>
            <String>"Tailwind CSS"</String>,
          </CodeLine>

          {/* Line 12 */}
          <CodeLine number="12" indent>
            ],
          </CodeLine>

          {/* Line 13 */}
          <CodeLine number="13" indent>
            <Property>principles:</Property> [
          </CodeLine>

          {/* Line 14 */}
          <CodeLine number="14" doubleIndent>
            <String>"responsive"</String>,
          </CodeLine>

          {/* Line 15 */}
          <CodeLine number="15" doubleIndent>
            <String>"accessible"</String>,
          </CodeLine>

          {/* Line 16 */}
          <CodeLine number="16" doubleIndent>
            <String>"scalable"</String>,
          </CodeLine>

          {/* Line 17 */}
          <CodeLine number="17" indent>
            ],
          </CodeLine>

          {/* Line 18 */}
          <CodeLine number="18">
            {"};"}
          </CodeLine>

          {/* Line 19 */}
          <CodeLine number="19">
            &nbsp;
          </CodeLine>

          {/* Line 20 */}
          <CodeLine number="20">
            <Comment>
              // turning ideas into interfaces
            </Comment>
          </CodeLine>

          {/* Line 21 */}
          <CodeLine number="21">
            <Function>ship</Function>
            <Text>(developer);</Text>
            <Cursor />
          </CodeLine>
        </div>
      </div>

      {/* Status bar */}
      <div className="relative z-20 flex h-7 items-center justify-between border-t border-[var(--workspace-divider)] bg-[var(--surface-elevated)] px-3">
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--tertiary)]">
          <span>✓</span>
          <span>Ready</span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[10px] text-[var(--text-secondary)]">
          <span>UTF-8</span>
          <span>LF</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- */
/* Code Editor Helpers            */
/* ----------------------------- */

function CodeLine({
  number,
  children,
  indent = false,
  doubleIndent = false,
}) {
  return (
    <div className="flex min-w-0 whitespace-nowrap">
      <span className="mr-3 inline-block w-5 shrink-0 select-none text-right text-[10px] leading-[1.65] text-[var(--code-line-number)] sm:mr-5">
        {number}
      </span>

      <span
        className={
          indent
            ? doubleIndent
              ? "pl-6 sm:pl-8"
              : "pl-3 sm:pl-4"
            : ""
        }
      >
        {children}
      </span>
    </div>
  );
}

function Keyword({ children }) {
  return (
    <span className="text-[var(--code-purple)]">
      {children}
    </span>
  );
}

function Type({ children }) {
  return (
    <span className="text-[var(--code-blue)]">
      {children}
    </span>
  );
}

function Property({ children }) {
  return (
    <span className="text-[var(--code-cyan)]">
      {children}
    </span>
  );
}

function Variable({ children }) {
  return (
    <span className="text-[var(--code-yellow)]">
      {children}
    </span>
  );
}

function Operator({ children }) {
  return (
    <span className="text-[var(--code-pink)]">
      {children}
    </span>
  );
}

function String({ children }) {
  return (
    <span className="text-[var(--code-green)]">
      {children}
    </span>
  );
}

function Comment({ children }) {
  return (
    <span className="text-[var(--code-comment)]">
      {children}
    </span>
  );
}

function Function({ children }) {
  return (
    <span className="text-[var(--code-orange)]">
      {children}
    </span>
  );
}

function Text({ children }) {
  return (
    <span className="text-[var(--code-text)]">
      {children}
    </span>
  );
}

function Cursor() {
  return (
    <span className="ml-1 inline-block h-3 w-[5px] translate-y-[1px] animate-[blink_1s_step-end_infinite] bg-[var(--primary)]" />
  );
}