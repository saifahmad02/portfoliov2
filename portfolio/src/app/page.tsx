import LeftSidebar from "@/components/layout/LeftSidebar";
import EdgeMarkers from "@/components/navigation/EdgeMarkers";
import About from "@/components/sections/About";
import Sharing from "@/components/Sharing/Sharing";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Max-width wrapper to prevent excessive spreading on large screens */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
        {/* Three-column layout on desktop: smaller sidebar, flexible content, edge markers */}
        <div className="lg:grid lg:grid-cols-[minmax(280px,35%)_1fr_120px] lg:gap-5 xl:gap-8">
          {/* Left Sidebar - Sticky on desktop, regular on mobile */}
          <div className="min-w-0">
            <LeftSidebar />
          </div>

          {/* Center Scrolling Content - No max-width, uses full available space */}
          <main className="py-10 lg:py-20 min-w-0">
            <About />
            <Sharing />
            <Experience />
            <Projects />
            <Footer />
          </main>

          {/* Right Edge Markers Column - Desktop only */}
          <div className="hidden lg:block">
            <EdgeMarkers />
          </div>
        </div>
      </div>

      {/* Floating Theme Toggle - Mobile/Tablet only (hidden on desktop lg+) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <div className="p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:border-accent hover:shadow-xl transition-all duration-200">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
