"use client";

import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isInHero, setIsInHero] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if we're near the top of the page (replaces hero check)
      setIsInHero(window.scrollY < 200);

      // Set scrolling state to true
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Hide navbar 2 seconds after scrolling stops (if not near top)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);

      // Detect active section based on scroll position
      // Match the scroll-margin-top offset from globals.css
      // Mobile: 6rem (96px), Desktop: 8rem (128px)
      const isMobile = window.innerWidth < 768;
      const scrollMargin = isMobile ? 96 : 128;
      const sections = ["about", "sharing", "experience", "projects"];
      const scrollPosition = window.scrollY + scrollMargin + 50; // Extra 50px for better midpoint detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Handle mouse enter/leave with delay
  const handleMouseEnter = () => {
    setIsHoveringTop(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding to prevent bouncing
    setTimeout(() => {
      setIsHoveringTop(false);
    }, 300);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Sharing", href: "#sharing" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (href: string) => {
    return `#${activeSection}` === href;
  };

  // Determine if navbar should be visible
  const shouldShowNavbar = isInHero || isScrolling || isHoveringTop || isMobileMenuOpen;

  return (
    <>
      {/* Always-visible hover detection area at the top */}
      {!isInHero && (
        <div
          className="fixed top-0 left-0 right-0 h-20 z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}

      <nav
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldShowNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <Container size="full">
          <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo with emerald accent - larger and more elegant */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "#about")}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-serif font-bold text-accent hover:text-accent/80 transition-colors"
          >
            sa
          </a>

          {/* Desktop Navigation - larger, more readable */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12 xl:space-x-14">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-mono text-base lg:text-lg xl:text-xl transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-accent font-medium"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle - larger */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - larger text */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 bg-background/95 backdrop-blur-md rounded-b-lg border-b border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`font-mono text-base transition-colors duration-200 py-2 ${
                    isActive(item.href)
                      ? "text-accent font-medium"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
    </>
  );
}
