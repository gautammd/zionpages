import Link from "next/link";
import { DecodeText } from "@/components/decode-text";
import { ThemeSwitch } from "@/components/theme";

const nav = [
  { href: "/essays", label: "Essays" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-border/70 bg-background/95">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none"
        >
          <span
            aria-hidden
            className="brand-mark transition-colors duration-300"
          />
          <span className="font-mono text-[0.75rem] font-medium tracking-[0.08em] uppercase">
            <DecodeText text="Zion Pages" />
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-7">
          <nav aria-label="Primary navigation" className="flex items-center gap-5 sm:gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
