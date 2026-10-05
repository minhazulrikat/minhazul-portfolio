"use client";

export default function TimelineDot({
  accent = "primary",
  active = false,
  visible = false,
  delay = 0,
  reducedMotion = false,
}) {
  const accentStyle = {
    "--experience-accent": `var(--${accent})`,
  };

  return (
    <span
      aria-hidden="true"
      style={accentStyle}
      className="absolute -left-8 top-0 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:-left-16"
    >
      {/* Outer ring */}
      <span
        className="absolute inset-0 rounded-full border border-[var(--experience-accent)] bg-[var(--background)]"
        style={{
          opacity: visible ? 1 : 0,
          transition: reducedMotion
            ? "none"
            : `opacity 0.4s ease-out ${delay}s`,
        }}
      />

      {/* Inner dot */}
      <span
        className={`relative h-1.5 w-1.5 rounded-full bg-[var(--experience-accent)] ${
          active && visible ? "timeline-active-dot" : ""
        }`}
        style={{
          opacity: visible ? 1 : 0,
          transition: reducedMotion
            ? "none"
            : `opacity 0.4s ease-out ${delay}s`,
        }}
      />
    </span>
  );
}