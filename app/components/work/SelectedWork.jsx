"use client";

import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

import "../../globals.css";

const filters = [
  {
    id: "all",
    label: "All Projects",
  },
  {
    id: "react",
    label: "React",
  },
  {
    id: "next",
    label: "Next.js",
  },
  {
    id: "javascript",
    label: "JavaScript",
  },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") {
      return true;
    }

    return project.technologies.some((technology) => {
      const tech = technology.toLowerCase();

      if (activeFilter === "react") {
        return tech.includes("react");
      }

      if (activeFilter === "next") {
        return tech.includes("next");
      }

      if (activeFilter === "javascript") {
        return tech.includes("javascript") || tech === "js";
      }

      return false;
    });
  });

  return (
    <motion.section
      id="work"
      className="relative overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--background)] scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="page-grid pointer-events-none absolute inset-0 opacity-[0.44]"
      />

      {/* Section Content */}
      <div className="relative mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-0">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Heading */}
          <div className="max-w-[650px]">
            <p className="font-mono text-[11px] tracking-wide text-[var(--primary)] sm:text-xs">
              &#47;&#47; 02 &#47; SELECTED WORK
            </p>

            <h2 className="mt-2 font-mono text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Selected Work
            </h2>

            <p className="mt-4 max-w-[620px] text-sm leading-6 text-[var(--text-secondary)] sm:text-base sm:leading-7">
              A curated selection of projects where I turn ideas and designs
              into responsive, functional, and production-ready web experiences.
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`rounded-[4px] border px-3 py-2 font-mono text-[11px] transition-all duration-200 ${
                    isActive
                      ? "border-[var(--primary)] bg-[var(--primary)]/[0.08] text-[var(--primary)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  }`}
                >
                  {filter.label}
                  {filter.id === "all" && (
                    <span className="ml-1.5">
                      ({projects.length.toString().padStart(2, "0")})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 space-y-6 sm:mt-16 lg:mt-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                <ProjectCard project={project} reverse={index % 2 !== 0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
