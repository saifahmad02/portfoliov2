interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground border-b-2 border-accent/20 pb-4 md:pb-5 ${className}`}>
      {children}
    </h2>
  );
}
