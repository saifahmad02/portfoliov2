import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  href,
  type = "button",
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-mono font-medium transition-all duration-200 inline-block";

  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-accent",
    secondary: "bg-accent text-background hover:bg-muted",
    outline: "border-2 border-border text-foreground hover:bg-muted/10",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
