import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/layout/Container";
import sharingData from "@/data/sharing.json";
import profileData from "@/data/profile.json";
import { SharingContent, PlatformType } from "@/types";

const platformColors: Record<PlatformType, string> = {
  Medium: "bg-muted/20 text-muted",
  Notion: "bg-muted/20 text-muted",
  LinkedIn: "bg-muted/20 text-muted",
  General: "bg-muted/20 text-muted",
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Sharing() {
  const content = sharingData as SharingContent[];

  return (
    <section id="sharing" className="py-20">
      <Container size="wide">
        <SectionHeading>What I&apos;m Sharing</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {content.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card hoverable className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-semibold px-2 py-1 rounded ${platformColors[item.platform]}`}>
                    {item.platform}
                  </span>
                  <span className="text-sm font-mono text-muted">
                    {formatDate(item.date)}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-mono text-muted flex-grow leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 text-accent font-mono text-sm font-medium flex items-center group-hover:text-accent transition-colors">
                  Read more
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Profile Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-border">
          <p className="text-foreground font-mono font-medium">Find more of my writing:</p>
          <div className="flex gap-4">
            {profileData.mediumUrl && (
              <a
                href={profileData.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-background border border-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors font-mono font-medium"
              >
                Medium
              </a>
            )}
            {profileData.notionUrl && (
              <a
                href={profileData.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-background border border-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors font-mono font-medium"
              >
                Notion
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
