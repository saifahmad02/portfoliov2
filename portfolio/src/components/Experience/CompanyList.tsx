import { Experience } from "@/types";

interface CompanyListProps {
  experiences: Experience[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function CompanyList({ experiences, activeId, onSelect }: CompanyListProps) {
  return (
    <div className="flex flex-col gap-1">
      {experiences.map((exp) => {
        const isActive = exp.id === activeId;

        return (
          <button
            key={exp.id}
            onClick={() => onSelect(exp.id)}
            className={`group relative text-left px-4 py-4 transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
              isActive ? "bg-background" : "hover:bg-muted/5"
            }`}
          >
            {/* Accent bar - only visible for active or hover */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 bg-accent transition-opacity duration-200 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-30"
              }`}
            />

            {/* Company name */}
            <div
              className={`font-mono text-sm md:text-base lg:text-base uppercase tracking-wider font-medium transition-colors duration-200 ${
                isActive ? "text-accent" : "text-foreground group-hover:text-accent"
              }`}
            >
              {exp.company}
            </div>

            {/* Date range */}
            <div className="text-xs md:text-sm lg:text-sm font-mono text-muted mt-1">
              {exp.shortDate}
            </div>
          </button>
        );
      })}
    </div>
  );
}
