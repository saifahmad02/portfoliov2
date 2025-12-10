import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({ children, className = "", onClick, hoverable = false }: CardProps) {
  const hoverClass = hoverable ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group" : "";

  return (
    <div
      className={`bg-background rounded-lg border border-border shadow-md p-6 ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
