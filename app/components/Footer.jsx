const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/minhazulrikat",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minhazul-rikat/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/MinhazulRikat/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1280px] px-5 py-8 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8">
          {/* Top row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Identity */}
            <div>
              <p className="font-mono text-sm font-medium tracking-tight text-[var(--text-primary)]">
                MINHAZUL ISLAM RIKAT
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Frontend & CMS Developer
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Technical credits */}
          <div className="flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-5 md:flex-row md:items-center md:justify-between">
            {/* Built with */}
            <p className="text-xs text-[var(--text-muted)]">
              Built with{" "}
              <span className="text-[var(--text-secondary)]">
                Next.js · React · Tailwind CSS · Framer Motion · Lenis
              </span>
            </p>

            {/* Hosting */}
            <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
              Hosted on{" "}
              <span className="text-[var(--text-secondary)]">Vercel</span>
            </p>
          </div>

          {/* Copyright */}
          <div className="flex justify-between border-t border-[var(--border-subtle)] pt-5">
            <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
             © {new Date().getFullYear()} Minhazul Islam Rikat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}