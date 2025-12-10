import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import Container from "@/components/layout/Container";
import experienceData from "@/data/experience.json";
import { Experience } from "@/types";

function formatDateRange(startDate: string, endDate: string | null) {
  const start = new Date(startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" });
  const end = endDate
    ? new Date(endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
    : "Present";
  return `${start} - ${end}`;
}

export default function ExperienceSection() {
  const experiences = experienceData as Experience[];

  return (
    <section id="experience" className="py-20">
      <Container size="narrow">
        <SectionHeading>Work Experience</SectionHeading>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-0 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />

                <div className="bg-background rounded-lg p-6 border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-mono font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-xl font-serif text-foreground font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-muted mt-2 md:mt-0">
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </span>
                  </div>

                  <p className="text-sm font-mono text-muted mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
