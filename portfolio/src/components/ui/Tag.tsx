interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 text-xs md:text-sm lg:text-sm font-mono font-medium bg-muted/20 text-muted rounded-full ${className}`}>
      {children}
    </span>
  );
}
