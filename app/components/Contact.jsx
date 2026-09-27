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
      className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      <div className="border-t border-[var(--border)] pt-12">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
              07 / Contact
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-medium tracking-tight text-[var(--text-primary)] md:text-7xl lg:text-8xl">
              Have a project in mind?
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
              Let&apos;s build something useful, functional and well-crafted.
            </p>

            <a
              href="mailto:your@email.com"
              className="mt-10 inline-flex border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
            >
              Start a Conversation →
            </a>
          </div>

          {/* Contact Links */}
          <div className="lg:col-span-4">
            <div className="border-t border-[var(--border)]">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center justify-between border-b border-[var(--border)] py-5 transition-colors hover:text-[var(--primary)]"
                >
                  <span className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                    {link.label}
                  </span>

                  <span className="text-sm text-[var(--text-secondary)]">
                    {link.value} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}