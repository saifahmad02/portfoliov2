"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/layout/Container";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export default function Projects() {
  const projects = projectsData as Project[];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <Container size="wide">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              hoverable
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              {/* Placeholder for thumbnail - using gradient instead */}
              <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-sm font-mono text-muted mb-4 leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
                {project.technologies.length > 4 && (
                  <Tag>+{project.technologies.length - 4} more</Tag>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div>
              {/* Placeholder thumbnail */}
              <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-foreground text-8xl font-bold opacity-20">
                  {selectedProject.title.charAt(0)}
                </span>
              </div>

              <p className="text-sm font-mono text-muted mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-serif font-semibold text-foreground mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-accent transition-colors font-mono font-medium text-center"
                  >
                    View Live Site
                  </a>
                )}
                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-border text-foreground rounded-lg hover:bg-muted/10 transition-colors font-mono font-medium text-center"
                  >
                    View Repository
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
}
