export default function WorkspaceBar() {
  return (
    <div className="h-[34px] w-full border-b border-[var(--workspace-border)] bg-[var(--workspace-bg)]">
      <div className="flex h-full w-full items-center justify-between px-3 sm:px-4">
        {/* Left side */}
        <div className="flex h-full min-w-0 items-center">
          {/* Window controls */}
          <div className="flex shrink-0 items-center gap-[6px]">
            <span className="h-[9px] w-[9px] rounded-full bg-[var(--workspace-window-red)] sm:h-[10px] sm:w-[10px]" />

            <span className="h-[9px] w-[9px] rounded-full bg-[var(--workspace-window-yellow)] sm:h-[10px] sm:w-[10px]" />

            <span className="h-[9px] w-[9px] rounded-full bg-[var(--workspace-window-green)] sm:h-[10px] sm:w-[10px]" />
          </div>

          {/* Divider */}
          <span className="mx-3 h-4 w-px shrink-0 bg-[var(--workspace-divider)] sm:mx-4" />

          {/* File path */}
          <a
            href="#hero"
            className="group flex min-w-0 items-center gap-1.5 font-mono text-[10px] transition-colors duration-200 sm:gap-2 sm:text-[11px]"
          >
            {/* Folder icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0 text-[var(--primary)]"
            >
              <path
                d="M3.5 6.5C3.5 5.67 4.17 5 5 5h5l2 2h7c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H5c-.83 0-1.5-.67-1.5-1.5v-11Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Project name */}
            <span className="truncate text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--workspace-text)]">
              rikat-portfolio
            </span>

            {/* Path */}
            <span className="hidden text-[var(--workspace-faint)] sm:inline">
              /
            </span>

            <span className="hidden text-[var(--text-muted)] sm:inline">
              src
            </span>

            <span className="hidden text-[var(--workspace-faint)] sm:inline">
              /
            </span>

            {/* App.tsx — always cyan */}
            <span className="text-[var(--primary)]">
              App.tsx
            </span>
          </a>
        </div>

        {/* Right side */}
        <div className="hidden shrink-0 items-center gap-5 font-mono text-[10px] sm:flex">
          {/* Git branch */}
          <div className="flex items-center gap-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="text-[var(--workspace-git)]"
            >
              <circle
                cx="6"
                cy="5"
                r="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <circle
                cx="18"
                cy="7"
                r="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <circle
                cx="18"
                cy="19"
                r="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="M6 7v7a5 5 0 0 0 5 5h5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />

              <path
                d="M11 5h3a4 4 0 0 1 4 4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

            <span className="text-[var(--workspace-text)]">
              git:(main)
            </span>
          </div>

          {/* Availability */}
          {/* Availability */}
{/* Availability */}
<div className="hidden items-center gap-2 rounded-full border border-[var(--workspace-status-border)] bg-[var(--workspace-status-bg)] px-3 py-1 text-[10px] text-[var(--tertiary)] md:flex">
  <span className="relative flex h-[7px] w-[7px] shrink-0">
    <span className="absolute inset-0 animate-ping rounded-full bg-[var(--tertiary)] opacity-60" />
    <span className="relative block h-[7px] w-[7px] rounded-full bg-[var(--tertiary)]" />
  </span>

  <span>
    Available for new projects
  </span>
</div>
        </div>
      </div>
    </div>
  );
}