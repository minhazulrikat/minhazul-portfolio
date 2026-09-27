import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      {/* Section Header */}
      <div className="mb-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
          02 / Selected Work
        </p>

        <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--text-primary)] md:text-6xl">
          Selected Work
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
          A selection of projects where I turned ideas and designs into
          responsive, functional web experiences.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-32 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}