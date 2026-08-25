"use client";

import { useEffect, useState } from "react";

const STABLE = "signal: stable";
const RARE = [
  "signal: watched",
  "signal: déjà vu",
  "carrier: awake",
] as const;

/**
 * A dormant status line. Almost always reads "signal: stable";
 * roughly one visit in twelve it reads something else. Decoration
 * only — hidden from assistive tech.
 */
export function TraceLine({ className }: { className?: string }) {
  const [text, setText] = useState(STABLE);

  useEffect(() => {
    if (Math.random() < 1 / 12) {
      setText(RARE[Math.floor(Math.random() * RARE.length)]);
    }
  }, []);

  return (
    <p aria-hidden="true" className={className}>
      {text}
    </p>
  );
}
