import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saif Ahmad - Portfolio",
  description: "Software Engineer - Building scalable applications and sharing insights on modern web development.",
  openGraph: {
    title: "Saif Ahmad - Portfolio",
    description: "Software Engineer",
    images: [],
  },
  twitter: {
    card: "summary", 
    title: "Saif Ahmad - Portfolio",
    description: "Software Engineer",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Saif Ahmad',
  },
};

// Script to prevent flash - runs before React hydrates
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');

      // Default to dark mode for all users
      if (stored === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        // Dark mode by default (if no preference or preference is dark)
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${cormorantGaramond.variable} font-mono antialiased`} style={{ ['--font-mono' as string]: 'Satoshi, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
