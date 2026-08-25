"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="h-11 gap-2 px-2 font-mono text-[0.6875rem] tracking-[0.04em] text-muted-foreground hover:text-foreground"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={
        resolvedTheme === "dark"
          ? "Matrix theme active. Switch to Construct (light) theme"
          : "Construct theme active. Switch to Matrix (dark) theme"
      }
    >
      <span aria-hidden className="mode-glyph" />
      <span className="dark:hidden">Construct</span>
      <span className="hidden dark:inline">Matrix</span>
    </Button>
  );
}
