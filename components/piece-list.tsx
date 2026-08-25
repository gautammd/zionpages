import Link from "next/link";

import { type Piece, formatPieceDate } from "@/lib/writing";

export function PieceList({ pieces }: { pieces: Piece[] }) {
  return (
    <ol className="border-t border-border/70">
      {pieces.map((piece) => (
        <li key={piece.slug} className="border-b border-border/70">
          <Link
            href={`/writing/${piece.slug}`}
            className="group grid min-w-0 gap-5 py-8 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-10"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:block sm:space-y-1.5">
              <p className="t-label text-signal">
                {piece.form} · {piece.field}
              </p>
              <time dateTime={piece.date} className="t-label block">
                {formatPieceDate(piece.date)}
              </time>
            </div>
            <div className="min-w-0 max-w-2xl">
              <h3 className="text-2xl leading-tight font-semibold tracking-[-0.025em] text-balance transition-colors group-hover:text-signal group-focus-visible:text-signal sm:text-3xl">
                {piece.title}
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground text-pretty">
                {piece.deck}
              </p>
            </div>
            <span className="t-label whitespace-nowrap sm:justify-self-end sm:pt-1.5">
              {piece.readingMinutes} min
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
