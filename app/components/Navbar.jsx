"use client";

import { useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--background)]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 md:px-8 lg:px-12">
        
        {/* Logo / Name */}
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--primary)]"
        >
          MINHAZUL ISLAM RIKAT
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--text-primary)] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="text-lg">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[var(--border-subtle)] bg-[var(--surface)] md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col px-5 py-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[var(--border-subtle)] py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex w-fit border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}