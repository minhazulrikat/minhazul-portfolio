"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { number: "01", label: "Work", href: "#work" },
  { number: "02", label: "Experience", href: "#experience" },
  { number: "03", label: "About", href: "#about" },
  { number: "04", label: "Skills", href: "#skills" },
  { number: "05", label: "Process", href: "#process" },
  { number: "06", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

useEffect(() => {
  const sections = navLinks
    .map((link) => document.querySelector(link.href))
    .filter(Boolean);

  const updateActiveSection = () => {
    const headerOffset = 110;

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top;

      if (sectionTop <= headerOffset) {
        currentSection = `#${section.id}`;
      }
    });

    setActiveSection(currentSection);
  };

  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });

  window.addEventListener("resize", updateActiveSection);

  return () => {
    window.removeEventListener(
      "scroll",
      updateActiveSection,
    );

    window.removeEventListener(
      "resize",
      updateActiveSection,
    );
  };
}, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-[var(--border-subtle)] bg-[var(--background)]">
      <div className="mx-auto flex h-[66px] w-full max-w-[1220px] items-center px-5 sm:px-6 lg:px-0">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex shrink-0 items-center gap-2.5"
        >
          {/* Logo */}
          <span className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-[var(--primary)] font-mono text-[12px] font-bold tracking-tight text-[var(--background)] transition-colors duration-200 group-hover:bg-[var(--primary-hover)]">
           &lt;M/&gt;
          </span>

          {/* Name + Role */}
          <span className="flex flex-col">
            <span className="font-mono text-[13px] font-bold leading-[1.1] tracking-wide text-[var(--text-primary)]">
              MINHAZUL ISLAM RIKAT
            </span>

            <span className="mt-1 font-mono text-[10px] leading-none text-[var(--text-muted)]">
              Frontend &amp; CMS Developer
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-1.5 whitespace-nowrap rounded-[6px] border px-3 py-2 font-mono text-[11px] transition-all duration-200 ${
                  isActive
                    ? "border-[var(--border)] bg-[var(--primary)]/[0.08]"
                    : "border-transparent hover:border-[var(--border)] hover:bg-[var(--primary)]/[0.06]"
                }`}
              >
                {/* // */}
                <span className="text-[var(--primary)]">
                  //
                </span>

                {/* Number */}
                <span
                  className={
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--text-muted)] group-hover:text-[var(--primary)]"
                  }
                >
                  {link.number}.
                </span>

                {/* Label */}
                <span
                  className={
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                  }
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="ml-7 hidden items-center rounded-[7px] border border-[var(--primary)]/40 bg-[var(--primary)]/[0.06] px-4 py-2.5 font-mono text-[11px] font-medium text-[var(--primary)] transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary)]/[0.1] lg:flex"
        >
          <span className="mr-1.5">&gt;_</span>
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-[6px] border border-[var(--border)] font-mono text-base text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)] lg:hidden"
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[var(--border-subtle)] bg-[var(--background)] lg:hidden">
          <div className="mx-auto w-full max-w-[1220px] px-5 py-3 sm:px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 border-b border-[var(--border-subtle)] py-4 font-mono text-[11px] transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span className="text-[var(--primary)]">
                    //
                  </span>

                  <span>{link.number}.</span>

                  <span>{link.label}</span>
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center rounded-[7px] border border-[var(--primary)]/40 bg-[var(--primary)]/[0.06] px-4 py-2.5 font-mono text-[11px] font-medium text-[var(--primary)] transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary)]/[0.1]"
            >
              <span className="mr-1.5">&gt;_</span>
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}