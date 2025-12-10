import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import Sharing from "@/components/sections/Sharing";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sharing />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
