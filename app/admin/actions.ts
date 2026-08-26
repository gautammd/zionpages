"use server";

import fs from "node:fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isAuthed } from "@/lib/admin-auth";
import {
  type Field,
  type Form,
  type Piece,
  forms,
  getPieces,
  piecesFile,
  topics,
} from "@/lib/writing";

async function assertEditable() {
  if (!(await isAuthed())) {
    throw new Error("Unauthorized: log in at /admin first.");
  }
}

function writePieces(pieces: Piece[]) {
  fs.writeFileSync(piecesFile, `${JSON.stringify(pieces, null, 2)}\n`);
}

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function savePiece(formData: FormData) {
  await assertEditable();

  const title = field(formData, "title");
  const deck = field(formData, "deck");
  const body = field(formData, "body");
  if (!title || !deck || !body) {
    throw new Error("Title, deck, and body are required.");
  }

  const form = field(formData, "form") as Form;
  const pieceField = field(formData, "field") as Field;
  if (!forms.some((f) => f.form === form)) {
    throw new Error(`Unknown form: ${form}`);
  }
  if (!topics.some((t) => t.field === pieceField)) {
    throw new Error(`Unknown field: ${pieceField}`);
  }

  const pieces = getPieces();
  const originalSlug = field(formData, "originalSlug");
  const index = pieces.findIndex((piece) => piece.slug === originalSlug);
  if (originalSlug && index === -1) {
    throw new Error(`No piece found for slug: ${originalSlug}`);
  }

  const base = slugify(field(formData, "slug") || title) || "untitled";
  let slug = base;
  for (
    let n = 2;
    pieces.some((piece) => piece.slug === slug && piece.slug !== originalSlug);
    n++
  ) {
    slug = `${base}-${n}`;
  }

  const subtitle = field(formData, "subtitle");
  const credential = field(formData, "credential");
  const words = body.split(/\s+/).length;

  const piece: Piece = {
    slug,
    title,
    ...(subtitle && { subtitle }),
    deck,
    date: field(formData, "date") || new Date().toISOString().slice(0, 10),
    form,
    field: pieceField,
    readingMinutes:
      Number(field(formData, "readingMinutes")) ||
      Math.max(1, Math.round(words / 200)),
    author: field(formData, "author") || "Gautam Devaraju",
    ...(credential && { credential }),
    body,
  };

  if (index === -1) {
    pieces.push(piece);
  } else {
    pieces[index] = piece;
  }

  writePieces(pieces);
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function deletePiece(formData: FormData) {
  await assertEditable();

  const slug = field(formData, "originalSlug");
  if (!slug) throw new Error("Nothing to delete: no original slug.");
  writePieces(getPieces().filter((piece) => piece.slug !== slug));
  revalidatePath("/", "layout");
  redirect("/admin");
}
