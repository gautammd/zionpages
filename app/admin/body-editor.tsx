"use client";

import { Fragment, useDeferredValue, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkGfm from "remark-gfm";

import { figures } from "@/components/figures";

function Preview({ markdown }: { markdown: string }) {
  const parts = markdown.split(/\{\{figure:([a-z-]+)\}\}/);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          const Figure = figures[part];
          return Figure ? (
            <Figure key={`fig-${index}`} />
          ) : (
            <p
              key={`fig-${index}`}
              className="rounded-md border border-dashed border-border px-3 py-2 font-mono text-xs text-muted-foreground"
            >
              Unknown figure: {part}
            </p>
          );
        }
        return part.trim() ? (
          <Fragment key={`md-${index}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkFlexibleMarkers]}>
              {part}
            </ReactMarkdown>
          </Fragment>
        ) : null;
      })}
    </>
  );
}

export function BodyEditor({ initialBody }: { initialBody?: string }) {
  const [body, setBody] = useState(initialBody ?? "");
  const deferredBody = useDeferredValue(body);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <label className="block">
        <span className="t-label mb-1.5 block">Body (Markdown) *</span>
        <textarea
          name="body"
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className="h-[36rem] w-full resize-y rounded-md border border-border bg-background px-3 py-2 font-mono text-[0.8rem] leading-6 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </label>
      <div className="hidden lg:block">
        <span className="t-label mb-1.5 block">Preview</span>
        <div className="prose h-[36rem] overflow-y-auto rounded-md border border-border/70 bg-background px-5 py-4">
          {deferredBody.trim() ? (
            <Preview markdown={deferredBody} />
          ) : (
            <p className="text-sm text-muted-foreground">
              Start typing to see a preview.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
