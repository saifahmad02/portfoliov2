interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-12 text-foreground border-b-2 border-accent/20 pb-4 inline-block ${className}`}>
      {children}
    </h2>
  );
}
