"use client";

import { useState } from "react";
import { Experience } from "@/types";

interface MobileAccordionProps {
  experiences: Experience[];
}

function formatDateRange(startDate: string, endDate: string | null): string {
  const start = new Date(startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const end = endDate
    ? new Date(endDate).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Present";
  return `${start} – ${end}`;
}

export default function MobileAccordion({ experiences }: MobileAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(experiences[0]?.id || null);

  const toggleItem = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col">
      {experiences.map((exp) => {
        const isExpanded = activeId === exp.id;

        return (
          <div key={exp.id} className="border-b border-border">
            {/* Accordion Header */}
            <button
              onClick={() => toggleItem(exp.id)}
              className={`relative w-full text-left px-4 py-4 transition-all duration-200 ease-in-out ${
                isExpanded ? "bg-background" : "hover:bg-muted/5"
              }`}
            >
              {/* Accent bar - only visible for expanded item */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-accent transition-opacity duration-200 ease-in-out ${
                  isExpanded ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  {/* Company name */}
                  <div
                    className={`font-mono text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                      isExpanded ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {exp.company}
                  </div>

                  {/* Date range */}
                  <div className="text-xs font-mono text-muted mt-1">
                    {exp.shortDate}
                  </div>
                </div>

                {/* Chevron icon */}
                <svg
                  className={`w-5 h-5 text-muted transition-transform duration-200 flex-shrink-0 ml-2 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Accordion Content */}
            {isExpanded && (
              <div className="px-4 py-6 bg-background/50">
                {/* Role title with company name highlighted */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {exp.role}{" "}
                  <span className="text-accent">@ {exp.company}</span>
                </h3>

                {/* Date range */}
                <p className="text-sm font-mono text-muted mb-4">
                  {formatDateRange(exp.startDate, exp.endDate)}
                </p>

                {/* Bullet points with triangle markers */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      {/* Triangle marker */}
                      <svg
                        className="w-2 h-2 mt-2 flex-shrink-0 text-accent"
                        viewBox="0 0 8 8"
                        fill="currentColor"
                      >
                        <polygon points="0,0 8,4 0,8" />
                      </svg>
                      <span className="text-sm font-mono text-muted leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono text-foreground font-medium mb-2 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-muted/20 text-muted font-mono text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
