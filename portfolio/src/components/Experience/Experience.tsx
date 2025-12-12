"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import experienceData from "@/data/experience.json";
import { Experience as ExperienceType } from "@/types";
import CompanyList from "./CompanyList";
import ExperienceDetail from "./ExperienceDetail";
import MobileAccordion from "./MobileAccordion";

export default function Experience() {
  const experiences = experienceData as ExperienceType[];
  const [activeId, setActiveId] = useState<string>(experiences[0]?.id || "");

  const activeExperience = experiences.find((exp) => exp.id === activeId);

  return (
    <section id="experience" className="min-h-screen pt-20 md:pt-24">
      <Container size="full">
        <div className="flex flex-col min-h-[calc(100vh-6rem)]">
          {/* Top: Section Heading - Left Aligned */}
          <div className="mb-12 md:mb-14 lg:mb-16">
            <SectionHeading>Experience</SectionHeading>
          </div>

          {/* Middle: Experience Content - Vertically Centered, Full Width */}
          <div className="flex-1 flex items-center">
            <div className="w-full">
              {/* Desktop: Two-column layout */}
              <div className="hidden md:grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
                {/* Left Column: Company List */}
                <div>
                  <CompanyList
                    experiences={experiences}
                    activeId={activeId}
                    onSelect={setActiveId}
                  />
                </div>

                {/* Right Column: Experience Details */}
                <div>
                  {activeExperience && (
                    <ExperienceDetail experience={activeExperience} />
                  )}
                </div>
              </div>

              {/* Mobile: Accordion */}
              <div className="md:hidden">
                <MobileAccordion experiences={experiences} />
              </div>
            </div>
          </div>

          {/* Bottom spacing for sections without footer */}
          <div className="h-12 md:h-16"></div>
        </div>
      </Container>
    </section>
  );
}
