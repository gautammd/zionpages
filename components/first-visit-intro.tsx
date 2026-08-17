"use client";

import { ArrowDown, ArrowRight, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

const INTRO_COOKIE = "zion_intro_seen_v2";
const ANSWERS_COOKIE = "zion_answers";
const COOKIE_MAX_AGE = 31_536_000;

const ANSWERS = [
  {
    id: "still-me",
    label: "Still me",
    lead: "Another is replaced. Then another.",
    question: "When do you stop being you?",
  },
  {
    id: "not-quite",
    label: "Not quite",
    lead: "Only one changed.",
    question: "What went missing?",
  },
  {
    id: "depends",
    label: "Depends",
    lead: "It depends.",
    question: "On the neuron—or what it changes?",
  },
  {
    id: "which-neuron",
    label: "Which neuron?",
    lead: "Pick any one.",
    question: "Does your answer change?",
  },
] as const;

type Answer = (typeof ANSWERS)[number];

function setCookie(name: string, value: string) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
}

function saveAnswer(answer: Answer["id"]) {
  setCookie(
    ANSWERS_COOKIE,
    encodeURIComponent(JSON.stringify({ version: 2, answer })),
  );
}

export function FirstVisitIntro() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [answer, setAnswer] = useState<Answer | null>(null);

  useLayoutEffect(() => {
    const hasSeenIntro = document.cookie
      .split("; ")
      .some((cookie) => cookie === `${INTRO_COOKIE}=1`);
    const dialog = dialogRef.current;

    if (!hasSeenIntro && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  function chooseAnswer(nextAnswer: Answer) {
    setAnswer(nextAnswer);
    saveAnswer(nextAnswer.id);
  }

  function rememberIntro() {
    setCookie(INTRO_COOKIE, "1");
  }

  return (
    <dialog
      ref={dialogRef}
      className="first-visit-dialog"
      aria-labelledby="first-visit-title"
      onClose={rememberIntro}
    >
      <div className="first-visit-shell mx-auto flex w-full max-w-5xl flex-col">
        <div className="flex justify-end">
          <button
            type="button"
            className="group flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => dialogRef.current?.close()}
            aria-label="Skip introduction"
          >
            <X className="size-5 transition-transform duration-200 group-hover:rotate-90 motion-reduce:transition-none" />
          </button>
        </div>

        <div className="intro-stage flex flex-1 items-center">
          <div className="mx-auto w-full max-w-2xl">
            <div className="intro-neuron-line" aria-hidden="true">
              {Array.from({ length: 7 }, (_, index) => (
                <span
                  key={index}
                  className={index === 3 ? "is-artificial" : undefined}
                />
              ))}
            </div>

            <div
              key={answer?.id ?? "question"}
              className="intro-thought"
              aria-live="polite"
              aria-atomic="true"
            >
              {answer ? (
                <>
                  <p className="intro-lead">{answer.lead}</p>
                  <h2 id="first-visit-title" className="intro-question">
                    {answer.question}
                  </h2>
                  <button
                    type="button"
                    autoFocus
                    className="intro-continue group"
                    onClick={() => dialogRef.current?.close()}
                    aria-label="Continue to the homepage"
                  >
                    <ArrowDown className="size-5 transition-transform group-hover:translate-y-1 motion-reduce:transition-none" />
                  </button>
                </>
              ) : (
                <>
                  <p className="intro-lead">
                    One neuron in your brain is replaced.
                    <span>The artificial one works exactly the same.</span>
                  </p>
                  <h2 id="first-visit-title" className="intro-question">
                    Still you?
                  </h2>
                  <ul className="intro-choice-list">
                    {ANSWERS.map((choice) => (
                      <li key={choice.id}>
                        <button
                          type="button"
                          className="intro-choice-button group"
                          onClick={() => chooseAnswer(choice)}
                        >
                          <span>{choice.label}</span>
                          <ArrowRight
                            aria-hidden="true"
                            className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
