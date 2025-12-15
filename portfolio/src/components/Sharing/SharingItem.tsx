import { SharingItem as SharingItemType } from "@/types";

type SharingItemProps = SharingItemType;

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
      className="group grid grid-cols-[3px_1fr] md:grid-cols-[4px_1fr_auto] gap-2 md:gap-2 lg:gap-3 xl:gap-5 py-2.5 md:py-3 lg:py-4 xl:py-5 border-b border-border transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 hover:bg-accent/5 -mx-4 px-4 rounded-sm"
    >
      {/* Accent Bar */}
      <div className="w-[3px] md:w-1 bg-accent opacity-30 group-hover:opacity-100 transition-opacity duration-200 ease-in-out md:row-span-3" />

      {/* Content - Meta only on desktop */}
      <div className="flex flex-col gap-1.5 md:gap-1.5 lg:gap-1.5 xl:gap-2 min-w-0">
        {/* Meta row */}
        <div className="flex items-center gap-2 text-[10px] md:text-xs lg:text-xs xl:text-sm font-mono">
          <span className="uppercase tracking-widest text-accent font-medium">
            {platform}
          </span>
          <span className="text-muted">·</span>
          {/* Desktop date */}
          <span className="hidden md:inline text-muted">
            {formatDate(date, false)}
          </span>
          {/* Mobile date */}
          <span className="md:hidden text-muted">
            {formatDate(date, true)}
          </span>
        </div>

        {/* Title row - Mobile only (with arrow) */}
        <div className="md:hidden flex items-start justify-between gap-2">
          <h3 className="text-base font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-200 ease-in-out flex-1 min-w-0">
            {title}
          </h3>
          {/* Mobile arrow */}
          <span className="text-accent text-base shrink-0 mt-0.5">
            ›
          </span>
        </div>

        {/* Description - Mobile only (inside content div) */}
        <p className="md:hidden text-xs text-muted leading-relaxed">
          {description}
        </p>
      </div>

      {/* Read indicator - desktop only */}
      <span className="hidden md:flex items-center gap-1 text-foreground font-mono text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-in-out whitespace-nowrap self-start">
        Read
        <svg
          className="w-4 h-4"
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

      {/* Title - Desktop only (spans full width) */}
      <h3 className="hidden md:block text-lg lg:text-xl xl:text-2xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-200 ease-in-out col-span-2 col-start-2">
        {title}
      </h3>

      {/* Description - Desktop only (spans full width) */}
      <p className="hidden md:block text-sm lg:text-sm xl:text-base text-muted leading-relaxed col-span-2 col-start-2">
        {description}
      </p>
    </a>
  );
}
