"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷ0123456789";

export function DecodeText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  const scramble = useCallback(() => {
    if (
      frame.current !== null ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let tick = 0;
    const run = () => {
      tick += 1;
      const resolved = Math.floor(tick / 2);
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " " || i < resolved) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(""),
      );
      if (resolved < text.length) {
        frame.current = requestAnimationFrame(run);
      } else {
        setDisplay(text);
        frame.current = null;
      }
    };
    frame.current = requestAnimationFrame(run);
  }, [text]);

  return (
    <span className={className} onMouseEnter={scramble} aria-label={text}>
      {display}
    </span>
  );
}
