const contactLinks = [
  {
    label: "Email",
    value: "minhazulrikat@gmail.com",
    href: "mailto:minhazulrikat@gmail.com",
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/minhazulrikat",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/minhazul-rikat/",
  },
  {
    label: "Facebook",
    value: "Facebook",
    href: "https://www.facebook.com/MinhazulRikat/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background)] scroll-mt-24"
    >
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="page-grid pointer-events-none absolute inset-0 opacity-[0.28]"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        {/* Contact Panel */}
        <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Main Contact Content */}
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">
                {"//"} 07 / CONTACT &amp; CONNECT
              </p>

              <h2 className="mt-5 max-w-xl font-mono text-4xl font-semibold leading-[0.95] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
                Have a project
                <br />
                in mind?
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base sm:leading-7">
                Let&apos;s build something useful, functional, and
                well-crafted. I am open to full-time frontend roles,
                contracts, and CMS collaborations.
              </p>

              <a
                href="mailto:minhazulrikat@gmail.com"
                className="group mt-8 inline-flex items-center gap-3 rounded-[5px] border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-wide text-[var(--background)] transition-colors duration-200 hover:bg-[var(--primary-hover)]"
              >
                <span>Start a Conversation</span>

                <span
                  aria-hidden="true"
                  className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            {/* Contact Channels */}
            <div className="lg:col-span-5">
              <div className="rounded-[8px] border border-[var(--border)] bg-[var(--background)] p-4 sm:p-5">
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Connect Channels
                  </span>

                  <span className="font-mono text-[9px] text-[var(--tertiary)]">
                    ONLINE
                  </span>
                </div>

                {/* Links */}
                <div className="mt-3 space-y-2">
                  {contactLinks.map((link) => {
                    const isEmail = link.href.startsWith("mailto:");

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={isEmail ? undefined : "_blank"}
                        rel={
                          isEmail ? undefined : "noopener noreferrer"
                        }
                        className="group flex items-center justify-between gap-4 rounded-[3px] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 transition-colors duration-200 hover:border-[var(--primary)]"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-secondary)]">
                          {link.label}
                        </span>

                        <span className="flex min-w-0 items-center gap-1 font-mono text-[10px] text-[var(--primary)]">
                          <span className="truncate">
                            {link.value}
                          </span>

                          <span
                            aria-hidden="true"
                            className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}