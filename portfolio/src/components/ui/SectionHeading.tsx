interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <p className={`font-serif font-semibold text-accent text-lg mb-8 ${className}`}>
      {children}
    </p>
  );
}
