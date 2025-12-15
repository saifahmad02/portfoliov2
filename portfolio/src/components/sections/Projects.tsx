"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectButton from "@/components/ui/ProjectButton";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export default function Projects() {
  const projects = projectsData as Project[];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Get featured project (first one with featured: true, or just first project)
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const listProjects = projects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="pb-12 lg:pb-40">
      <SectionHeader
        title="Projects"
        tagline="A collection of projects and contributions I'm proud of."
      />

      {/* Featured Project Card */}
      {featuredProject && (
        <div
          onClick={() => setSelectedProject(featuredProject)}
          className="mb-8 lg:mb-16 border-[0.5px] border-featured-border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent hover:shadow-[0_8px_30px_rgb(20,105,74,0.3)] dark:hover:shadow-[0_8px_30px_rgb(61,157,104,0.4)]"
        >
          {/* Image */}
          <div className="w-full aspect-video bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center relative overflow-hidden">
            {featuredProject.thumbnail ? (
              <Image
                src={featuredProject.thumbnail}
                alt={featuredProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
              />
            ) : (
              <span className="text-foreground text-9xl font-bold opacity-10">
                {featuredProject.title.charAt(0)}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 lg:p-7 xl:p-8">
            {/* Badge and Year */}
            <div className="flex items-center gap-2 mb-2 md:mb-2 lg:mb-2.5 xl:mb-3">
              <span className="px-2 py-0.5 bg-accent/20 text-accent font-mono text-[10px] md:text-xs uppercase tracking-wide rounded">
                Featured
              </span>
              <span className="text-xs md:text-sm font-mono text-muted">{featuredProject.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-serif font-semibold text-foreground mb-1.5 md:mb-2 lg:mb-2.5 xl:mb-3">
              {featuredProject.title}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm lg:text-sm xl:text-base font-mono text-muted leading-relaxed mb-3 md:mb-5 lg:mb-5 xl:mb-6">
              {featuredProject.shortDescription}
            </p>

            {/* Technologies and Expand Icon */}
            <div className="flex items-end justify-between gap-4">
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-accent/10 text-accent font-mono text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="text-muted/60 hover:text-accent transition-colors duration-200 shrink-0"
                aria-label="Expand project details"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project List */}
      <div className="flex flex-col overflow-hidden">
        {listProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedProject(project)}
            className="relative group border-b border-border py-5 cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-start">
              {/* Left: Title and Description */}
              <div className="min-w-0">
                <h4 className="text-xl font-serif font-semibold text-foreground transition-colors duration-200 group-hover:text-accent mb-2">
                  {project.title}
                </h4>
                <p className="text-sm font-mono text-muted leading-relaxed mb-1">
                  {project.shortDescription}
                </p>
                {/* Mobile: Year and Click to expand on same line */}
                <div className="md:hidden flex items-center justify-between gap-2 mt-2">
                  <span className="text-sm font-mono text-muted">
                    {project.year}
                  </span>
                  <span className="text-xs font-mono text-muted/60 group-hover:text-accent transition-colors duration-200">
                    Click to expand →
                  </span>
                </div>
                {/* Desktop: Click to expand only */}
                <span className="hidden md:inline-block text-xs font-mono text-muted/60 group-hover:text-accent transition-colors duration-200">
                  Click to expand →
                </span>
              </div>

              {/* Right: Year - Desktop only */}
              <div className="hidden md:block text-sm font-mono text-muted md:text-right">
                {project.year}
              </div>
            </div>

            {/* Hover Image - Desktop Only */}
            <div
              className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 rounded-lg overflow-hidden pointer-events-none transition-all duration-300 ${
                hoveredId === project.id
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center relative">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                ) : (
                  <span className="text-foreground text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-background rounded-lg p-6 md:p-8 max-h-[90vh] overflow-y-auto border-2 border-accent shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-foreground md:text-muted hover:text-accent bg-muted/10 md:bg-transparent transition-colors rounded-full hover:bg-muted/20 z-10"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="w-full aspect-video bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              {selectedProject.thumbnail ? (
                <Image
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              ) : (
                <span className="text-foreground text-9xl font-bold opacity-10">
                  {selectedProject.title.charAt(0)}
                </span>
              )}
            </div>

            {/* Year */}
            <p className="text-xs font-mono text-muted uppercase tracking-wide mb-2">
              {selectedProject.year}
            </p>

            {/* Title */}
            <h3 className="text-xl md:text-3xl font-serif font-semibold text-accent mb-3 md:mb-4">
              {selectedProject.title}
            </h3>

            {/* Long Description */}
            <p className="text-xs md:text-base font-mono text-muted leading-relaxed mb-4 md:mb-6">
              {selectedProject.fullDescription}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-accent/10 text-accent font-mono text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            {selectedProject.links && selectedProject.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {selectedProject.links.map((link, index) => (
                  <ProjectButton key={index} link={link} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
