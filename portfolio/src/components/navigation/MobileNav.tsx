'use client';

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
  icon: string;
}

const sections: Section[] = [
  { id: 'about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'sharing', label: 'Sharing', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { id: 'experience', label: 'Experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { id: 'projects', label: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      // Match the scroll-margin-top offset from globals.css
      const isMobile = window.innerWidth < 768;
      const scrollMargin = isMobile ? 96 : 128;
      const scrollPosition = window.scrollY + scrollMargin + 50;

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

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 lg:hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          <div className="bg-background/95 backdrop-blur-md border-2 border-accent rounded-lg shadow-2xl p-4 min-w-[200px]">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-muted hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  {/* Icon */}
                  <svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d={section.icon} />
                  </svg>

                  {/* Label */}
                  <span className="font-mono text-sm">{section.label}</span>

                  {/* Active Indicator */}
                  {isActive && (
                    <span className="ml-auto text-accent">•</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-muted hover:text-foreground transition-colors"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            // X icon when open
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            // Hamburger icon when closed
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
    </>
  );
}
