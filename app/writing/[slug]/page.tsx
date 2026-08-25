import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkGfm from "remark-gfm";

import { figures } from "@/components/figures";
import { Reveal } from "@/components/reveal";
import { formatPieceDate, getPiece, pieces } from "@/lib/writing";

export function generateStaticParams() {
  return pieces.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const piece = getPiece((await params).slug);

  return piece
    ? { title: piece.title, description: piece.deck }
    : { title: "Not found" };
}

function Body({ markdown }: { markdown: string }) {
  const parts = markdown.split(/\{\{figure:([a-z-]+)\}\}/);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          const Figure = figures[part];
          return Figure ? (
            <Reveal key={`fig-${part}`}>
              <Figure />
            </Reveal>
          ) : null;
        }
        return part.trim() ? (
          <Fragment key={part.slice(0, 40)}>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkFlexibleMarkers]}>
              {part}
            </ReactMarkdown>
          </Fragment>
        ) : null;
      })}
    </>
  );
}

export default async function PiecePage({
  params,
}: PageProps<"/writing/[slug]">) {
  const piece = getPiece((await params).slug);

  if (!piece) notFound();

  const next = pieces[pieces.indexOf(piece) + 1];

  return (
    <div className="mx-auto w-full max-w-6xl">
      <header className="px-6 pt-8 pb-12 sm:px-10 sm:pt-10 sm:pb-16">
        <Link
          href="/writing"
          className="mb-12 inline-flex min-h-11 items-center text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-signal focus-visible:text-foreground sm:mb-16"
        >
          All writing
        </Link>

        <div className="grid gap-8 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
          <div className="settle-late flex flex-wrap content-start items-center gap-x-3 gap-y-2 lg:block lg:space-y-2">
            <p className="t-label text-signal">
              {piece.form} · {piece.field}
            </p>
            <time dateTime={piece.date} className="t-label">
              {formatPieceDate(piece.date)}
            </time>
            <p className="t-label">{piece.author}</p>
            {piece.credential && (
              <p className="t-label text-muted-foreground/80">
                {piece.credential}
              </p>
            )}
            <p className="t-label">{piece.readingMinutes} min read</p>
          </div>
          <div className="settle">
            <h1 className="max-w-[16ch] text-[clamp(2.75rem,8vw,5rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-balance">
              {piece.title}
            </h1>
            {piece.subtitle && (
              <p className="mt-5 max-w-2xl font-serif text-xl leading-8 text-foreground/80 text-balance italic sm:text-2xl sm:leading-9">
                {piece.subtitle}
              </p>
            )}
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground text-pretty sm:text-2xl sm:leading-9">
              {piece.deck}
            </p>
          </div>
        </div>
      </header>

      <hr className="border-0 border-t border-border/70" />

      <article className="px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
          <span aria-hidden />
          <div className="prose">
            <Body markdown={piece.body} />
          </div>
        </div>

        {next ? (
          <div className="mt-20 grid border-t border-border/70 pt-8 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16 sm:mt-28">
            <p className="t-label pt-1">Next question</p>
            <Link
              href={`/writing/${next.slug}`}
              className="group mt-5 block max-w-2xl lg:mt-0"
            >
              <span className="block text-2xl leading-8 font-semibold tracking-[-0.025em] transition-colors group-hover:text-signal group-focus-visible:text-signal sm:text-3xl sm:leading-9">
                {next.title}
              </span>
              <span className="mt-3 block max-w-xl leading-7 text-muted-foreground text-pretty">
                {next.deck}
              </span>
            </Link>
          </div>
        ) : (
          <div className="mt-20 border-t border-border/70 pt-7 sm:mt-28">
            <Link
              href="/writing"
              className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-signal focus-visible:text-foreground"
            >
              More writing
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
