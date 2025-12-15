"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "sharing", label: "Sharing" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function EdgeMarkers() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      // Match the scroll-margin-top offset from globals.css
      // Mobile: 6rem (96px), Desktop: 8rem (128px)
      const isMobile = window.innerWidth < 768;
      const scrollMargin = isMobile ? 96 : 128;
      const scrollPosition = window.scrollY + scrollMargin + 50; // Extra 50px for better midpoint detection

      // Find which section we're currently in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);

        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            return;
          }
        }
      }

      // If we're at the very top, default to first section
      if (window.scrollY < scrollMargin) {
        setActiveSection(sections[0].id);
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-20 pt-0 flex flex-col gap-8">
      <ul className="flex flex-col gap-6">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id} className="group">
              {/* Entire area is clickable */}
              <button
                onClick={() => scrollToSection(section.id)}
                className="w-full flex flex-col items-end gap-2 py-2 px-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded transition-colors"
                aria-label={`Go to ${section.label}`}
              >
                {/* Marker Line - Top */}
                <div
                  className={`h-[2px] transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "w-[100px] bg-accent"
                      : "w-[40px] bg-muted group-hover:w-[70px] group-hover:bg-accent"
                  }`}
                />

                {/* Section Name - Below marker, left-aligned to marker start */}
                <span
                  className={`font-mono text-xs uppercase tracking-wide self-end transition-all duration-200 ${
                    isActive
                      ? "text-accent opacity-100"
                      : "text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent"
                  }`}
                >
                  {section.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Theme Toggle - Below all markers */}
      <div className="flex justify-end pr-2">
        <ThemeToggle />
      </div>
    </nav>
  );
}
