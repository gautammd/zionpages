import { Button } from "@/components/ui/button";
import { type Piece, forms, topics } from "@/lib/writing";

import { savePiece } from "./actions";
import { BodyEditor } from "./body-editor";
import { DeleteButton } from "./delete-button";

const control =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

function Label({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="t-label mb-1.5 block">{text}</span>
      {children}
    </label>
  );
}

export function PieceForm({ piece }: { piece?: Piece }) {
  return (
    <form action={savePiece} className="space-y-5">
      <input type="hidden" name="originalSlug" value={piece?.slug ?? ""} />

      <Label text="Title *">
        <input
          name="title"
          required
          defaultValue={piece?.title}
          className={control}
        />
      </Label>

      <Label text="Subtitle">
        <input
          name="subtitle"
          defaultValue={piece?.subtitle}
          className={control}
        />
      </Label>

      <Label text="Deck *">
        <textarea
          name="deck"
          required
          rows={2}
          defaultValue={piece?.deck}
          className={control}
        />
      </Label>

      <BodyEditor initialBody={piece?.body} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Label text="Form">
          <select
            name="form"
            defaultValue={piece?.form ?? "Essay"}
            className={control}
          >
            {forms.map((form) => (
              <option key={form.id} value={form.form}>
                {form.form}
              </option>
            ))}
          </select>
        </Label>

        <Label text="Field">
          <select
            name="field"
            defaultValue={piece?.field ?? "Philosophy"}
            className={control}
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.field}>
                {topic.field}
              </option>
            ))}
          </select>
        </Label>

        <Label text="Date">
          <input
            type="date"
            name="date"
            defaultValue={piece?.date}
            className={control}
          />
        </Label>

        <Label text="Reading minutes (blank = estimate)">
          <input
            type="number"
            name="readingMinutes"
            min={1}
            defaultValue={piece?.readingMinutes}
            className={control}
          />
        </Label>

        <Label text="Slug (blank = from title)">
          <input name="slug" defaultValue={piece?.slug} className={control} />
        </Label>

        <Label text="Author">
          <input
            name="author"
            defaultValue={piece?.author ?? "Gautam Devaraju"}
            className={control}
          />
        </Label>

        <Label text="Credential">
          <input
            name="credential"
            defaultValue={piece?.credential}
            className={control}
          />
        </Label>
      </div>

      <div className="flex items-center justify-between border-t border-border/70 pt-5">
        <Button type="submit">
          {piece ? "Save changes" : "Create piece"}
        </Button>
        {piece && <DeleteButton />}
      </div>
    </form>
  );
}
