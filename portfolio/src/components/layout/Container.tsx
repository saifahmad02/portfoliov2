import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "narrow" | "default" | "wide" | "full";
  className?: string;
}

/**
 * Container component that provides consistent left-aligned layout across all sections
 *
 * Features:
 * - Unified left margin that acts as the "sacred line" for editorial design
 * - Responsive padding that scales appropriately across breakpoints
 * - Ultra-wide display constraint (max 1920px) to prevent content sprawl
 * - Flexible size options for different content types
 *
 * Size options:
 * - narrow: max-w-4xl (best for reading-focused content like Experience, Contact)
 * - default: max-w-5xl (balanced for most content)
 * - wide: max-w-6xl (for grids like Projects, Sharing)
 * - full: max-w-[1920px] (for Hero and full-width sections)
 */
export default function Container({ children, size = "default", className = "" }: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-5xl",
    wide: "max-w-6xl",
    full: "max-w-[2560px]", // Caps at 1440p width, allowing more horizontal space
  };

  return (
    <div className={`w-full ${sizeClasses[size]} mx-auto px-6 md:px-12 xl:px-16 2xl:px-20 ${className}`}>
      {children}
    </div>
  );
}
