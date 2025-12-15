"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import experienceData from "@/data/experience.json";
import { Experience as ExperienceType } from "@/types";

// Date formatting utility
function formatDateRange(startDate: string, endDate: string | null): string {
  // Parse date strings in format "YYYY-MM" and add day to avoid timezone issues
  const parseDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, 1);
  };

  const start = parseDate(startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const end = endDate
    ? parseDate(endDate).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Present";
  return `${start} – ${end}`;
}

export default function Experience() {
  const experiences = experienceData as ExperienceType[];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [modalMessage, setModalMessage] = useState<{ company: string; message: string } | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll animation logic (all devices)
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      // Calculate progress: 0% when timeline starts entering viewport, 100% when fully scrolled through
      // When top of timeline is at viewport center, progress = 0
      // When bottom of timeline is at viewport center, progress = 100
      const distanceFromStart = viewportCenter - timelineTop;
      const progress = Math.max(0, Math.min(100, (distanceFromStart / timelineHeight) * 100));

      setScrollProgress(progress);

      // Determine active item based on scroll position
      let newActiveIndex = -1;
      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= viewportCenter) {
          newActiveIndex = index;
        }
      });
      setActiveIndex(newActiveIndex);
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [experiences.length]);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalMessage) {
        setModalMessage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalMessage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalMessage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalMessage]);

  return (
    <section id="experience" className="pb-12 lg:pb-40">
      <SectionHeader
        title="Experience"
        tagline="Where I've been putting my skills to use."
      />

      <div ref={timelineRef} className="relative">
        {/* Timeline Line - Background (full height) */}
        <div className="absolute left-[9px] md:left-[11px] top-0 bottom-0 w-[2px] bg-border" />

        {/* Timeline Line - Fill (animated based on scroll) */}
        <div
          className="absolute left-[9px] md:left-[11px] top-0 w-[2px] bg-accent transition-all duration-100"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Experience Items */}
        <div className="space-y-6 md:space-y-12">
          {experiences.map((exp, index) => {
            const isActive = index === activeIndex;
            const isFuture = index > activeIndex;

            return (
              <div
                key={exp.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative pl-8 md:pl-10 transition-all duration-300 ${
                  isFuture ? "opacity-40" : "opacity-100"
                } ${isActive ? "translate-x-2" : ""}`}
              >
                {/* Content */}
                <div className="flex-1 min-w-0 pb-6 md:pb-12">
                  {/* Top row: Company and Date */}
                  <div className="flex items-start justify-between gap-2 mb-1.5 md:mb-3">
                    {exp.companyUrl ? (
                      // External link case
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center gap-1.5 text-base md:text-xl lg:text-xl xl:text-2xl font-serif font-semibold transition-colors duration-300 hover:text-accent ${
                          isActive ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {exp.company}
                        <svg
                          className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : exp.companyMessage ? (
                      // Message popup case
                      <button
                        onClick={() => setModalMessage({ company: exp.company, message: exp.companyMessage! })}
                        className={`group inline-flex items-center gap-1.5 text-base md:text-xl lg:text-xl xl:text-2xl font-serif font-semibold transition-colors duration-300 hover:text-accent ${
                          isActive ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {exp.company}
                        <svg
                          className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4M12 8h.01" />
                        </svg>
                      </button>
                    ) : (
                      // Plain text case
                      <h3
                        className={`text-base md:text-xl lg:text-xl xl:text-2xl font-serif font-semibold transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {exp.company}
                      </h3>
                    )}
                    <span className="text-[10px] md:text-sm font-mono text-muted whitespace-nowrap">
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h4 className="text-sm md:text-lg lg:text-lg xl:text-xl font-serif font-semibold text-accent mb-2 md:mb-4">
                    {exp.role}
                  </h4>

                  {/* Highlights */}
                  <ul className="space-y-1.5 md:space-y-2.5 mb-3 md:mb-6">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-[11px] md:text-sm lg:text-sm xl:text-base font-mono text-muted leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-accent/10 text-accent font-mono text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Company Info Modal */}
      {modalMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalMessage(null)}
        >
          <div
            className="relative w-full max-w-md bg-background border-2 border-accent rounded-lg p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalMessage(null)}
              className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="pr-8">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-accent mb-4">
                {modalMessage.company}
              </h3>
              <p className="text-sm md:text-base font-mono text-muted leading-relaxed">
                {modalMessage.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
