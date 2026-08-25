"use client";

import { useEffect, useState } from "react";

const SEQUENCE = "redpill";
const LINES = [
  "Wake up, Neo...",
  "The Matrix has you.",
  "Follow the white rabbit.",
  "Knock, knock, Neo.",
];

export function Operator() {
  const [line, setLine] = useState<string | null>(null);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    console.log(
      "%cWake up, Neo...",
      "color:#00e57a;font-family:monospace;font-size:14px",
    );
    console.log(
      "%cThe Matrix has you. Try typing: redpill",
      "color:#3e7a5c;font-family:monospace;font-size:11px",
    );
  }, []);

  useEffect(() => {
    let buffer = "";
    let lineIndex = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
      if (!(e.target instanceof HTMLElement)) return;
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      )
        return;
      buffer = (buffer + e.key.toLowerCase()).slice(-SEQUENCE.length);
      if (buffer === SEQUENCE) {
        setTyped("");
        setLine(LINES[lineIndex % LINES.length]);
        lineIndex += 1;
        buffer = "";
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (line === null) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const reveal = setTimeout(() => setTyped(line), 0);
      const dismiss = setTimeout(() => setLine(null), 3200);
      return () => {
        clearTimeout(reveal);
        clearTimeout(dismiss);
      };
    }

    let i = 0;
    const type = setInterval(() => {
      i += 1;
      setTyped(line.slice(0, i));
      if (i >= line.length) clearInterval(type);
    }, 45);
    const dismiss = setTimeout(() => setLine(null), line.length * 45 + 3200);
    return () => {
      clearInterval(type);
      clearTimeout(dismiss);
    };
  }, [line]);

  if (line === null) return null;

  return (
    <div
      role="status"
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <p className="cursor-block border border-signal-muted/40 bg-background/95 px-4 py-2.5 font-mono text-[0.8125rem] tracking-wide text-signal">
        <span aria-hidden="true">{typed}</span>
        <span className="sr-only">{line}</span>
      </p>
    </div>
  );
}
