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
      aria-label="Switch between Construct and Matrix themes"
      title="Switch reality"
    >
      <span aria-hidden className="mode-glyph" />
      <span className="dark:hidden">Construct</span>
      <span className="hidden dark:inline">Matrix</span>
    </Button>
  );
}

export function ChoicePill() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMatrix = resolvedTheme === "dark";

  const choose = () => {
    setTheme(isMatrix ? "light" : "dark");
    window.dispatchEvent(
      new Event(isMatrix ? "zion:blue-pill" : "zion:red-pill"),
    );
  };

  return (
    <button
      type="button"
      className="choice-pill"
      onClick={choose}
      aria-label="Switch between Construct and Matrix themes"
      title="Take the pill"
    >
      <span aria-hidden className="choice-pill-shape" />
      <span aria-hidden className="choice-pill-hint">
        <span className="dark:hidden">look closer</span>
        <span className="hidden dark:inline">return</span>
      </span>
    </button>
  );
}
