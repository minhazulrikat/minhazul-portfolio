import Image from "next/image";

export default function ProjectCard({ project, reverse = false }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Project Visual */}
      <div
        className={`lg:col-span-7 ${
          reverse ? "lg:col-start-6" : "lg:col-start-1"
        }`}
      >
        <div className="group relative aspect-[16/10] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
  <Image
    src={project.image}
    alt={`${project.title} website preview`}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
    sizes="(max-width: 1024px) 100vw, 60vw"
  />
</div>
      </div>

      {/* Project Information */}
      <div
        className={`lg:col-span-5 ${
          reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"
        }`}
      >
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-[var(--accent)]">
          PROJECT {String(project.id).padStart(2, "0")}
        </p>

        <h3 className="text-3xl font-medium tracking-tight text-[var(--text-primary)] md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[var(--border)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--text-secondary)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex items-center gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--primary)]"
          >
            Live Website →
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
          >
            GitHub →
          </a>
        </div>
      </div>
    </article>
  );
}