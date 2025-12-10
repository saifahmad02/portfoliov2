import type { Metadata } from "next";
import { Cormorant_Garamond, Red_Hat_Mono } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saif Ahmad - Portfolio",
  description: "Software Engineer & Full-Stack Developer - Building scalable applications and sharing insights on modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${cormorantGaramond.variable} ${redHatMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
