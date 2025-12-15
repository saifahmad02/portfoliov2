"use client";

import profileData from "@/data/profile.json";

export default function LeftSidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-10 lg:py-20">
      <div>
        {/* Name - Large Cormorant Garamond */}
        <h1 className="font-serif font-bold text-accent text-5xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl leading-tight mb-2">
          {profileData.name}
        </h1>

        {/* Title */}
        <h2 className="font-serif font-bold text-foreground text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-3">
          {profileData.headline}
        </h2>

        {/* Tagline */}
        <p className="font-mono text-muted text-sm sm:text-base lg:text-base mb-8 max-w-[90%]">
          {profileData.tagline || profileData.bio}
        </p>

        {/* Resume Link */}
        {profileData.resumeUrl && (
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 border border-border rounded-lg font-mono text-xs lg:text-sm text-foreground hover:text-accent hover:border-accent transition-all duration-200 group mb-6"
          >
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 text-muted group-hover:text-accent transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View Resume</span>
            <svg
              className="w-3 h-3 lg:w-4 lg:h-4 ml-auto text-muted group-hover:text-accent transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      {/* Social Icons + Contact - Anchored at Bottom */}
      <div className="mt-auto">
        {/* Contact Email */}
        <div className="mb-6">
          <p className="font-mono text-accent uppercase tracking-wide text-xs mb-2">
            Let&apos;s Talk
          </p>
          <a
            href={`mailto:${profileData.email}`}
            className="font-mono text-sm text-foreground hover:text-accent transition-colors underline decoration-accent/30 hover:decoration-accent"
          >
            {profileData.email}
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          {profileData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={link.platform}
              >
                {link.platform === "GitHub" && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                )}
                {link.platform === "LinkedIn" && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {link.platform === "Medium" && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                )}
                {link.platform === "Notion" && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.214V6.354c0-.653-.28-.934-.748-1.027l-15.177.887c-.56.047-.747.327-.747.887zm14.337.746c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z"/>
                  </svg>
                )}
              </a>
            ))}
        </div>
      </div>
    </aside>
  );
}
