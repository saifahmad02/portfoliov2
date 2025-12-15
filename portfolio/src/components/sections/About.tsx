"use client";

import profileData from "@/data/profile.json";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    // Watch for changes to the dark class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="pb-12 lg:pb-40">
      <SectionHeader
        title="About"
        tagline="A brief look into me, passed the resume."
      />

      <div className="space-y-4 font-mono text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed text-foreground">
        {/* Profile Picture - Float to top right */}
        <div className="float-right ml-6 mb-4 w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[250px] xl:h-[250px]">
          <div className="w-full h-full border-2 border-border rounded-lg overflow-hidden shrink-0">
            <Image
              src={isDark ? "/images/darkmode-v2.png" : "/images/lightmode-v2.jpg"}
              alt={profileData.name}
              width={250}
              height={250}
              className="w-full h-full object-cover"
              key={isDark ? 'dark' : 'light'}
            />
          </div>
        </div>
        <p>
          Hey, I&apos;m Saif! I&apos;ve always been an engineer at heart, curious about how things work and how they fit together. That curiosity started when I built my first PC at eight years old, and it led me to study{" "}
          <span className="text-accent">Software Engineering</span> at{" "}
          <span className="text-accent">Western University,</span> where I found my favourite kind of work:{" "}
          <span className="text-accent">designing systems that connect and operate as one.</span>
        </p>

        <p>
          My most recent project,{" "}
          <a
            href="#projects"
            className="text-accent underline"
          >
            Copository,
          </a> is an AI-powered tool that converts GitHub repositories into structured documentation. It&apos;s been an incredible space to explore how{" "}
          <span className="text-accent">architecture, automation, and cloud workflows</span> come together to form a complete system. Before that, I worked at{" "}
          <a
            href="#experience"
            className="text-accent underline"
          >
            BMO and Bell Canada,
          </a> where I saw firsthand how collaboration and architecture drive engineering at enterprise scale.
        </p>

        <p>
          I enjoy writing about my work, experiences, and connecting with others who are curious about engineering and growth.{" "}
          <span className="text-accent">I&apos;m always open to conversations about software, learning, or anything else, so feel free to reach out!</span>
        </p>

        <p>
          When I&apos;m not coding, you&apos;ll find me playing basketball, at the gym, or cooking{" "}
          <span className="text-accent">(on and off the court ;) ).</span> I also enjoy reading, most recently <em>Greenlights</em> by Matthew McConaughey. Also, I just got back from five weeks of backpacking across{" "}
          <span className="text-accent">Southeast Asia</span>. If you&apos;ve been thinking about taking that trip, {" "}
          <span className="text-accent">this is your sign to book it!</span>
        </p>
      </div>
    </section>
  );
}
