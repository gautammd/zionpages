import type { ReactNode } from "react";

function Frame({
  label,
  caption,
  children,
  viewBox,
}: {
  label: string;
  caption: string;
  children: ReactNode;
  viewBox: string;
}) {
  return (
    <figure className="my-10 font-sans">
      <svg
        viewBox={viewBox}
        role="img"
        aria-label={label}
        className="w-full text-foreground/80"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {children}
      </svg>
      <figcaption className="t-label mt-4 max-w-[52ch] leading-5 text-pretty">
        {caption}
      </figcaption>
    </figure>
  );
}

function FieldWave() {
  const wave = (amp: number, y: number) => {
    let d = `M 0 ${y}`;
    for (let x = 0; x <= 560; x += 8) {
      const bump = Math.exp(-((x - 280) ** 2) / 6400);
      d += ` L ${x} ${(y - Math.sin(x / 18) * amp * bump).toFixed(2)}`;
    }
    return d;
  };
  return (
    <Frame
      viewBox="0 0 560 150"
      label="A field drawn as flat horizontal lines, with one region rising into a localized wave"
      caption="Fig. 1 — The field is the ocean; the particle is a wave. A localized disturbance in a field that fills all of spacetime. It has no existence apart from the field that is doing it."
    >
      {[130, 112, 94, 76].map((y, i) => (
        <path
          key={y}
          d={wave(i === 3 ? 34 : i * 4, y)}
          stroke="currentColor"
          opacity={i === 3 ? 1 : 0.35}
          className={i === 3 ? "text-signal" : undefined}
        />
      ))}
      <text
        x="280"
        y="18"
        textAnchor="middle"
        className="fill-current font-mono text-[10px]"
        opacity="0.7"
      >
        particle
      </text>
      <text
        x="60"
        y="146"
        className="fill-current font-mono text-[10px]"
        opacity="0.7"
      >
        field
      </text>
      <line x1="280" y1="24" x2="280" y2="38" stroke="currentColor" opacity="0.5" />
    </Frame>
  );
}

function LatticeHole() {
  const cells: ReactNode[] = [];
  const holeCol = 6;
  const holeRow = 1;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 10; col++) {
      const isHole = row === holeRow && col === holeCol;
      const cx = 40 + col * 54;
      const cy = 34 + row * 46;
      cells.push(
        isHole ? (
          <circle
            key={`${row}-${col}`}
            cx={cx}
            cy={cy}
            r="9"
            stroke="currentColor"
            strokeDasharray="2.5 3.5"
            className="text-signal"
          />
        ) : (
          <circle
            key={`${row}-${col}`}
            cx={cx}
            cy={cy}
            r="9"
            stroke="currentColor"
            opacity="0.4"
          />
        ),
      );
    }
  }
  return (
    <Frame
      viewBox="0 0 560 168"
      label="A grid of circles representing electrons in a crystal, with one dashed empty circle representing a hole"
      caption="Fig. 2 — A crystal lattice with one electron missing. The gap — the hole — has mass, charge, and momentum. It is an absence that passes every test we have for being a particle."
    >
      {cells}
      <text
        x={40 + holeCol * 54}
        y={34 + holeRow * 46 - 20}
        textAnchor="middle"
        className="fill-current font-mono text-[10px] text-signal"
      >
        the hole
      </text>
      <text
        x="40"
        y="160"
        className="fill-current font-mono text-[10px]"
        opacity="0.7"
      >
        electrons
      </text>
    </Frame>
  );
}

function IndrasNet() {
  const nodes: [number, number][] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 5; col++) {
      nodes.push([70 + col * 105 + (row % 2) * 26, 30 + row * 54]);
    }
  }
  const focus = 7;
  return (
    <Frame
      viewBox="0 0 560 172"
      label="A network of points connected by lines; one highlighted point is defined entirely by its connections"
      caption="Fig. 3 — Indra's net. Each jewel is nothing but the reflections of the others; each point in a field is defined by its relation to every other point. Remove the relations and no node remains."
    >
      {nodes.map(([x1, y1], i) =>
        nodes
          .slice(i + 1)
          .filter(([x2, y2]) => Math.hypot(x2 - x1, y2 - y1) < 125)
          .map(([x2, y2]) => (
            <line
              key={`${i}-${x2}-${y2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              opacity={
                i === focus || (x2 === nodes[focus][0] && y2 === nodes[focus][1])
                  ? 0.8
                  : 0.2
              }
              className={
                i === focus || (x2 === nodes[focus][0] && y2 === nodes[focus][1])
                  ? "text-signal"
                  : undefined
              }
            />
          )),
      )}
      {nodes.map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={i === focus ? 5 : 3.5}
          stroke="currentColor"
          opacity={i === focus ? 1 : 0.45}
          className={i === focus ? "text-signal" : undefined}
        />
      ))}
    </Frame>
  );
}

export const figures: Record<string, () => ReactNode> = {
  "field-wave": FieldWave,
  "lattice-hole": LatticeHole,
  "indras-net": IndrasNet,
};
