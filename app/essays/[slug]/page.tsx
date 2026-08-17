import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { essays, formatEssayDate, getEssay } from "@/lib/essays";

export function generateStaticParams() {
  return essays.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/essays/[slug]">): Promise<Metadata> {
  const essay = getEssay((await params).slug);

  return essay
    ? { title: essay.title, description: essay.deck }
    : { title: "Essay not found" };
}

export default async function EssayPage({ params }: PageProps<"/essays/[slug]">) {
  const essay = getEssay((await params).slug);

  if (!essay) notFound();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <header className="px-6 pt-8 pb-10 sm:px-10 sm:pt-10 sm:pb-12">
        <Link
          href="/essays"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground sm:mb-12"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          All essays
        </Link>

        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="t-label text-signal">{essay.field}</p>
            <span aria-hidden className="text-border">·</span>
            <time dateTime={essay.date} className="t-label">
              {formatEssayDate(essay.date)}
            </time>
            <span aria-hidden className="text-border">·</span>
            <p className="t-label">{essay.readingMinutes} min read</p>
          </div>
          <h1 className="max-w-[16ch] text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-balance">
            {essay.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground text-pretty sm:text-2xl sm:leading-9">
            {essay.deck}
          </p>
        </div>
      </header>

      <hr className="border-0 border-t border-border/70" />

      <article className="px-6 py-10 sm:px-10 sm:py-14">
        <div className="prose">
          <ReactMarkdown>{essay.body}</ReactMarkdown>
        </div>

        <div className="mt-14 max-w-[65ch] border-t border-border/70 pt-6">
          <Link
            href="/essays"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
          >
            More essays
          </Link>
        </div>
      </article>
    </div>
  );
}
