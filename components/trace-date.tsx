"use client";

import { useEffect, useState } from "react";

const SEEN_KEY = "zp-trace-seen";

/**
 * Renders the human date. On the first visit of a session the raw
 * machine form (hex epoch) is shown for a beat before settling —
 * the page catching itself displaying its substrate.
 */
export function TraceDate({
  date,
  formatted,
  className,
}: {
  date: string;
  formatted: string;
  className?: string;
}) {
  const [raw, setRaw] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let settle: ReturnType<typeof setTimeout>;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      return;
    }
    setRaw(true);
    settle = setTimeout(() => setRaw(false), 650);
    return () => clearTimeout(settle);
  }, []);

  const trace = `0x${Math.floor(
    new Date(`${date}T00:00:00Z`).getTime() / 1000,
  ).toString(16)}`;

  return (
    <time dateTime={date} className={className}>
      <span aria-hidden={raw ? true : undefined}>{raw ? trace : formatted}</span>
      {raw && <span className="sr-only">{formatted}</span>}
    </time>
  );
}
