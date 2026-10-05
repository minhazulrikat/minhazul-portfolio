"use client";

import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({
  project,
  reverse = false,
}) {
  const accentStyle = {
    "--project-accent": `var(--${project.accent})`,
  };

  return (
    <article
      style={accentStyle}
      className="group relative overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors duration-300 hover:border-[var(--project-accent)]/60 sm:p-5 lg:p-10"
    >
      <div
        className={`flex flex-col gap-8 lg:items-center lg:gap-10 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Project Preview */}
        <div className="w-full min-w-0 rounded-[6px] border border-[var(--border)] transition-colors duration-300 group-hover:border-[var(--project-accent)]/60 lg:w-[54%]">
          <ProjectPreview project={project} />
        </div>

        {/* Project Information */}
        <div className="flex min-w-0 flex-1 flex-col lg:px-1">
          {/* Project Number */}
          <p className="font-mono text-[11px] tracking-wide text-[var(--project-accent)]">
            PROJECT #{String(project.id).padStart(2, "0")}
          </p>

          {/* Project Title */}
          <h3 className="mt-2 font-mono text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-sm sm:leading-7">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-[3px] border border-[var(--border)] bg-[var(--background)] px-2 py-1 font-mono text-[10px] leading-4 text-[var(--project-accent)] transition-colors duration-200 sm:text-[11px]"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px]">
            {project.liveUrl &&
              project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-[var(--project-accent)] transition-colors duration-200 hover:opacity-80"
                >
                  <span>Live Website</span>

                  <FiExternalLink
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              )}

            {project.liveUrl &&
              project.liveUrl !== "#" &&
              project.githubUrl &&
              project.githubUrl !== "#" && (
                <span className="text-[var(--text-muted)]">
                  ·
                </span>
              )}

            {project.githubUrl &&
              project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--project-accent)]"
                >
                  <FaGithub
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />

                  <span>GitHub</span>

                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
                    →
                  </span>
                </a>
              )}
          </div>
        </div>
      </div>
    </article>
  );
}