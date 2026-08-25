---
name: Zion Pages
description: A quiet, precise publication about minds, brains, and the systems we build.
colors:
  construct-bg: "oklch(0.985 0.002 240)"
  construct-ink: "oklch(0.16 0.008 250)"
  matrix-bg: "oklch(0.125 0.014 165)"
  matrix-ink: "oklch(0.92 0.008 150)"
  signal-construct: "oklch(0.42 0.075 160)"
  signal-matrix: "oklch(0.75 0.16 145)"
  choice: "oklch(0.54 0.18 27)"
typography:
  interface: "Public Sans"
  reading: "Literata"
  metadata: "Azeret Mono"
---

# Zion Pages Design System

## Direction

Zion Pages is an editorial publication, not a product landing page or an
experiment. It carries several forms of writing — papers, essays, thoughts,
experiments — and each form keeps its own shape: papers show an abstract,
keywords, and references; thoughts carry no ceremony.

The front page opens inside the lead piece, presented as itself: form, field,
date, and byline in the metadata column, the title as a title, and the opening
prose set in the reading face. The reader is reading at pixel one; "Continue
reading" is the only invitation. Below a rule, the remaining pieces appear as
an index where the form leads the metadata. The lead piece is never repeated
in the index.

The Matrix is a quietly ambient layer beneath the interface: the mark,
Construct/Matrix theme names, the logo decode, the hidden `redpill` sequence,
a timestamp that settles from its machine form once per visit, a phrase that
decodes on hover, and a dormant trace line that rarely changes. It never
blocks, scores, sorts, or instructs the reader, and every ambient detail is
ignorable and reduced-motion safe.

Construct and Matrix change the atmosphere, not the editorial meaning. A claim
and its evidence remain the same in either theme.

The public interface never explains why the publication is good or describes
its editorial virtues. It demonstrates them through the questions and essays.

## Typography

- Public Sans carries navigation, headlines, and explanatory copy.
- Literata carries reading: piece bodies, abstracts, and the front-page
  opening prose, at 18px with a 65-character measure.
- Azeret Mono is reserved for dates, forms, fields, bylines, and reading time.
- Display headings stay within `-0.04em` tracking and balance over short lines.
- Plain language does not mean simplified claims; technical terms remain when
  they make the idea more exact.

## Layout

- Use one vertical reading flow inside a 72rem shell.
- Align metadata in a narrow column and the main idea in a wide column.
- Use rules only between real sections and index rows.
- Links are underlined text, not arrows; when everything points, nothing does.
- Prefer generous space to cards, shadows, panels, and decorative containers.
- Keep interactive targets at least 44px high and keyboard focus visible.
- On small screens, preserve the reading order and let columns stack naturally.

## Color and motion

The two themes are two worlds, not one palette inverted. Matrix (dark) is the
simulation: green-tinted blacks with a phosphor signal green. Construct
(light) is the loading space: sterile cool neutrals, near-white at almost zero
chroma, ink-first hierarchy, hairline gray rules. In the Construct, green
retreats to instrument readings — focus, small metadata, the trace line, the
mark — at a restrained, desaturated value. Red stays inside the mark in both
worlds. A claim and its evidence read identically in either theme; only the
atmosphere changes. Text never depends on accent color alone.

Motion is limited to deliberate hover feedback, the logo decode, hidden
easter eggs, a one-time settle of the title and metadata on page load, and
figures that rise quietly as they enter the viewport. Reveals only enhance
content that is already visible by default; nothing is gated on scroll.
Easing is exponential ease-out, and reduced-motion mode switches immediately.

## Content

Every visible sentence should teach, orient, or help the reader choose what to
read. Claims show their evidence, uncertainty remains visible, and each piece
leaves one clearer idea and one question worth following. Writing is bylined:
Gautam Devaraju, with the fuller form reserved for papers.
