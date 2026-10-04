import Image from "next/image";

export default function ProjectPreview({ project }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-[6px] ">
      {/* Browser Header */}
      <div className="flex h-9 items-center border-b border-[var(--border-subtle)] bg-[var(--background)] px-3 sm:h-10 sm:px-4">
        {/* Traffic Lights */}
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--workspace-window-red)] sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--workspace-window-yellow)] sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--workspace-window-green)] sm:h-2 sm:w-2" />
        </div>

        {/* URL */}
        <div className="mx-auto min-w-0 max-w-[65%] truncate font-mono text-[10px] text-[var(--text-muted)] sm:text-[11px]">
          {project.liveUrl !== "#" ? project.liveUrl : "project-preview.local"}
        </div>

        {/* Live Status */}
        <span className="shrink-0 font-mono text-[9px] font-medium text-[var(--tertiary)] sm:text-[10px]">
          LIVE
        </span>
      </div>

      {/* Website Preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--background)]">
        <Image
          src={project.image}
          alt={`${project.title} website preview`}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015] p-4"
        />

        {/* Subtle Preview Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[var(--background)]/[0.04] transition-opacity duration-300 group-hover:opacity-0 "
        />
      </div>
    </div>
  );
}