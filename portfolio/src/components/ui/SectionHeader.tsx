interface SectionHeaderProps {
  title: string;
  tagline: string;
}

export default function SectionHeader({ title, tagline }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {/* Mobile: Show title + tagline */}
      <div className="lg:hidden">
        <h2 className="font-serif font-bold text-foreground text-2xl mb-2">
          {title}
        </h2>
        <p className="font-mono font-bold text-accent text-lg">
          {tagline}
        </p>
      </div>

      {/* Desktop: Show only tagline */}
      <div className="hidden lg:block">
        <p className="font-serif font-bold text-accent text-xl lg:text-xl xl:text-2xl">
          {tagline}
        </p>
      </div>
    </div>
  );
}
