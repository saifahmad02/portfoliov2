import { Experience } from "@/types";

interface ExperienceDetailProps {
  experience: Experience;
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

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  return (
    <div className="h-full">
      {/* Role title with company name highlighted */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-serif font-semibold text-foreground mb-2">
        {experience.role}{" "}
        <span className="text-accent">@ {experience.company}</span>
      </h3>

      {/* Date range */}
      <p className="text-sm md:text-base lg:text-base font-mono text-muted mb-6">
        {formatDateRange(experience.startDate, experience.endDate)}
      </p>

      {/* Bullet points with triangle markers */}
      <ul className="space-y-4 mb-8">
        {experience.points.map((point, index) => (
          <li key={index} className="flex gap-3 items-start">
            {/* Triangle marker */}
            <svg
              className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 mt-2 flex-shrink-0 text-accent"
              viewBox="0 0 8 8"
              fill="currentColor"
            >
              <polygon points="0,0 8,4 0,8" />
            </svg>
            <span className="text-sm md:text-base lg:text-lg font-mono text-muted leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div>
          <h4 className="text-sm md:text-base lg:text-base font-mono text-foreground font-medium mb-3 uppercase tracking-wide">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted/20 text-muted font-mono text-xs md:text-sm lg:text-sm rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
