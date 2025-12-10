import profileData from "@/data/profile.json";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 md:pt-24 flex items-center"
    >
      <Container size="full">
        <div>
          {/* Name - Better proportioned scaling across all viewports */}
          <h1
            className="font-serif font-bold text-accent leading-none mb-8 sm:mb-12"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 14rem)',
            }}
          >
            {profileData.name}
          </h1>

          {/* Bio - Smaller, more readable proportions */}
          <div className="max-w-5xl mb-12 sm:mb-16">
            <p
              className="font-mono text-foreground leading-relaxed"
              style={{
                fontSize: 'clamp(0.875rem, 1.1vw, 1.375rem)',
              }}
            >
              {profileData.headline}
            </p>
            <p
              className="font-mono text-muted leading-relaxed mt-2"
              style={{
                fontSize: 'clamp(0.875rem, 1.1vw, 1.375rem)',
              }}
            >
              {profileData.bio}
            </p>
          </div>

          {/* Contact Block with emerald accent */}
          <div className="font-mono">
            <p
              className="text-accent uppercase tracking-wide font-medium mb-2"
              style={{
                fontSize: 'clamp(0.75rem, 0.9vw, 1.125rem)',
              }}
            >
              Let&apos;s Talk
            </p>
            <a
              href={`mailto:${profileData.email}`}
              className="text-foreground hover:text-accent transition-colors duration-200 underline decoration-accent/30 hover:decoration-accent"
              style={{
                fontSize: 'clamp(0.75rem, 0.9vw, 1.125rem)',
              }}
            >
              {profileData.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
