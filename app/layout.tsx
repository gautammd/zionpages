import type { Metadata } from "next";
import { Azeret_Mono, Literata, Public_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Operator } from "@/components/operator";
import { ThemeProvider } from "@/components/theme";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zionpages.com"),
  title: {
    default: "Zion Pages",
    template: "%s — Zion Pages",
  },
  description:
    "Papers, essays, thoughts, and experiments on AI, neuroscience, philosophy, and anatomy. Written by Gautam Devaraju.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${publicSans.variable} ${azeretMono.variable} ${literata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <Operator />
        </ThemeProvider>
      </body>
    </html>
  );
}
