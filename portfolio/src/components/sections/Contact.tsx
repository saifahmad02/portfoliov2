import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/layout/Container";
import profileData from "@/data/profile.json";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen pt-20 md:pt-24">
      <Container size="full">
        <div className="flex flex-col min-h-[calc(100vh-6rem)]">
          {/* Top: Section Heading - Left Aligned */}
          <div className="mb-12 md:mb-14 lg:mb-16">
            <SectionHeading>Get in Touch</SectionHeading>
          </div>

          {/* Middle: Email and Description - Vertically Centered, Full Width */}
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-mono text-muted mb-12 leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, and interesting conversations.
                Feel free to reach out!
              </p>

              <div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-mono font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {profileData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: Social Links - Left Aligned */}
          <div className="mt-12">
            <div className="flex flex-wrap gap-6">
              {profileData.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-200 text-foreground font-mono font-medium text-base md:text-lg lg:text-xl"
                >
                  {link.platform === "GitHub" && (
                    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {link.platform === "LinkedIn" && (
                    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {link.platform === "Twitter" && (
                    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
