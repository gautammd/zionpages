"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DecodeText } from "@/components/decode-text";
import { ThemeSwitch } from "@/components/theme";

const nav = [{ href: "/writing", label: "Writing" }] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 border-b border-border/70 bg-background/95">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="brand-mark transition-colors duration-300"
          />
          <span className="text-sm font-semibold tracking-[-0.01em]">
            <DecodeText text="Zion Pages" />
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-7">
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-5 sm:gap-7"
          >
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors duration-200 hover:text-foreground focus-visible:text-foreground ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
