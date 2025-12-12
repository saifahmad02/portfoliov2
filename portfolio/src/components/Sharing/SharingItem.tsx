import { SharingItem as SharingItemType } from "@/types";

interface SharingItemProps extends SharingItemType {}

// Date formatting utility
function formatDate(dateString: string, isMobile: boolean = false) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = isMobile
    ? { year: "numeric", month: "short", day: "numeric" }
    : { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export default function SharingItem({
  title,
  description,
  platform,
  url,
  date,
}: SharingItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[3px_1fr] md:grid-cols-[4px_1fr_auto] gap-4 md:gap-6 lg:gap-7 py-5 md:py-6 lg:py-8 border-b border-border first:border-t transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      {/* Accent Bar */}
      <div className="w-[3px] md:w-1 bg-accent opacity-30 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />

      {/* Content */}
      <div className="flex flex-col gap-2">
        {/* Meta row */}
        <div className="flex items-center gap-2 text-[9px] md:text-[10px] lg:text-xs xl:text-xs font-mono">
          <span className="uppercase tracking-widest text-accent font-medium">
            {platform}
          </span>
          <span className="text-muted">·</span>
          {/* Desktop date */}
          <span className="hidden md:inline text-[11px] lg:text-xs xl:text-sm text-muted">
            {formatDate(date, false)}
          </span>
          {/* Mobile date */}
          <span className="md:hidden text-[10px] text-muted">
            {formatDate(date, true)}
          </span>
        </div>

        {/* Title row - with arrow on mobile */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-200 ease-in-out">
            {title}
          </h3>
          {/* Mobile arrow - always visible */}
          <span className="md:hidden text-accent text-xl shrink-0 mt-0.5">
            ›
          </span>
        </div>

        {/* Description */}
        <p className="text-xs md:text-[13px] lg:text-base xl:text-lg text-muted leading-relaxed max-w-[90%]">
          {description}
        </p>
      </div>

      {/* Read indicator - desktop only */}
      <span className="hidden md:flex items-center gap-1 text-foreground font-mono text-sm lg:text-base xl:text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-in-out whitespace-nowrap">
        Read
        <svg
          className="w-4 h-4 lg:w-5 lg:h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}
