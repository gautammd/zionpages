import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkGfm from "remark-gfm";

import { PieceList } from "@/components/piece-list";
import { TraceDate } from "@/components/trace-date";
import { TraceLine } from "@/components/trace-line";
import { formatPieceDate, pieces } from "@/lib/writing";

function leadParagraphs(body: string, count: number) {
  return body
    .split("\n\n")
    .filter((block) => !block.startsWith("#") && !block.startsWith("{{"))
    .slice(0, count);
}

export default function Home() {
  const [lead, ...rest] = pieces;
  const opening = leadParagraphs(lead.body, 4).join("\n\n");

  return (
    <div className="mx-auto w-full max-w-6xl">
      <article className="px-6 pt-14 pb-16 sm:px-10 sm:pt-20 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
          <div className="settle-late flex flex-wrap content-start items-center gap-x-3 gap-y-2 lg:block lg:space-y-2">
            <p className="t-label text-signal">
              {lead.form} · {lead.field}
            </p>
            <TraceDate
              date={lead.date}
              formatted={formatPieceDate(lead.date)}
              className="t-label"
            />
            <p className="t-label">{lead.author}</p>
            {lead.credential && (
              <p className="t-label text-muted-foreground/80">
                {lead.credential}
              </p>
            )}
            <p className="t-label">{lead.readingMinutes} min read</p>
            <TraceLine className="t-label hidden text-muted-foreground/60 lg:block lg:pt-4" />
          </div>

          <div className="settle">
            <h1 className="max-w-[16ch] text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance">
              <Link
                href={`/writing/${lead.slug}`}
                className="transition-colors hover:text-signal focus-visible:text-signal"
              >
                {lead.title}
              </Link>
            </h1>

            {lead.subtitle && (
              <p className="mt-4 max-w-2xl font-serif text-lg leading-7 text-foreground/75 text-balance italic sm:text-xl sm:leading-8">
                {lead.subtitle}
              </p>
            )}

            <div className="prose mt-9">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkFlexibleMarkers]}
              >
                {opening}
              </ReactMarkdown>
            </div>

            <p className="mt-9">
              <Link
                href={`/writing/${lead.slug}`}
                className="inline-flex min-h-11 items-center font-serif text-lg text-foreground underline decoration-signal-muted underline-offset-4 transition-colors hover:decoration-signal focus-visible:decoration-signal"
              >
                Continue reading
              </Link>
            </p>
          </div>
        </div>
      </article>

      {rest.length > 0 && (
        <section
          aria-label="More writing"
          className="border-t border-border/70 px-6 py-16 sm:px-10 sm:py-20"
        >
          <div className="mb-9 flex items-baseline justify-between gap-6">
            <h2 className="text-sm font-semibold">Also in the pages</h2>
            <Link
              href="/writing"
              className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-signal focus-visible:text-foreground"
            >
              All writing
            </Link>
          </div>
          <PieceList pieces={rest} />
        </section>
      )}
    </div>
  );
}
