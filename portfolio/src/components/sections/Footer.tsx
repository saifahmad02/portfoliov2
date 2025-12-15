import footerData from "@/data/footer.json";

interface FooterData {
  text: string;
  buildYear: string;
}

export default function Footer() {
  const footer = footerData as FooterData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10">
      <div className="border-t border-border pt-8">
        <p className="font-mono text-xs md:text-sm text-muted leading-relaxed max-w-2xl">
          {footer.text}
        </p>
        <p className="font-mono text-xs text-muted/60 mt-4">
          All Rights Reserverd © {currentYear} Saif Ahmad
        </p>
      </div>
    </footer>
  );
}
