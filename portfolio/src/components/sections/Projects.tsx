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

            {/* Technologies and Click to expand */}
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
              <span className="text-xs font-mono text-muted/60 hover:text-accent transition-colors duration-200 whitespace-nowrap">
                Click to expand →
              </span>
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
                <span className="text-xs font-mono text-muted/60 group-hover:text-accent transition-colors duration-200">
                  Click to expand →
                </span>
              </div>

              {/* Right: Year */}
              <div className="text-sm font-mono text-muted md:text-right">
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
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors rounded-full hover:bg-muted/10"
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
            <h3 className="text-3xl font-serif font-semibold text-accent mb-4">
              {selectedProject.title}
            </h3>

            {/* Long Description */}
            <p className="text-sm md:text-base font-mono text-muted leading-relaxed mb-6">
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
