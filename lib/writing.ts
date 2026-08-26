import fs from "node:fs";
import path from "node:path";

export const topics = [
  {
    id: "anatomy",
    field: "Anatomy",
    name: "Anatomy",
    question: "How does the body shape the mind?",
    description: "How the brain and body are built, connected, and changed.",
  },
  {
    id: "neuroscience",
    field: "Neuroscience",
    name: "Neuroscience",
    question: "How does the brain make a memory?",
    description:
      "How brain cells work together to support perception, memory, and action.",
  },
  {
    id: "philosophy",
    field: "Philosophy",
    name: "Philosophy",
    question: "What makes you the same person over time?",
    description:
      "Questions about consciousness, identity, knowledge, and truth.",
  },
  {
    id: "ai",
    field: "AI",
    name: "Artificial intelligence",
    question: "Could a machine have a self?",
    description:
      "How machines learn from examples, use language, and make mistakes.",
  },
] as const;

export type Field = (typeof topics)[number]["field"];

export const forms = [
  {
    id: "papers",
    form: "Paper",
    plural: "Papers",
    description: "Research, explained: a claim, its evidence, and what follows.",
  },
  {
    id: "essays",
    form: "Essay",
    plural: "Essays",
    description: "Long-form pieces that follow one question to a clearer one.",
  },
  {
    id: "thoughts",
    form: "Thought",
    plural: "Thoughts",
    description: "Short fragments. An idea worth keeping, without ceremony.",
  },
  {
    id: "experiments",
    form: "Experiment",
    plural: "Experiments",
    description: "Things tried, with a method and a result.",
  },
] as const;

export type Form = (typeof forms)[number]["form"];

export type Piece = {
  slug: string;
  title: string;
  subtitle?: string;
  deck: string;
  date: string;
  form: Form;
  field: Field;
  readingMinutes: number;
  author: string;
  credential?: string;
  body: string;
};

export const piecesFile = path.join(process.cwd(), "content", "pieces.json");

export function getPieces(): Piece[] {
  return JSON.parse(fs.readFileSync(piecesFile, "utf8")) as Piece[];
}

const pieceDate = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatPieceDate(date: string) {
  return pieceDate.format(new Date(`${date}T00:00:00Z`));
}

export function getPiece(slug: string) {
  return getPieces().find((piece) => piece.slug === slug);
}

export function getPiecesByForm(form: Form) {
  return getPieces().filter((piece) => piece.form === form);
}
