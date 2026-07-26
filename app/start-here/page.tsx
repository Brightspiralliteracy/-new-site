"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "../page";

type Result = {
  eyebrow: string;
  title: string;
  body: string;
  action: string;
  href: string;
};

const questions = [
  {
    prompt: "Which sentence feels closest to what is happening?",
    choices: [
      { label: "Something about my child’s reading does not add up.", score: "clarity" },
      { label: "We understand the difficulty and need specialist teaching.", score: "turnaround" },
      { label: "I want trusted guidance and a parent community.", score: "room" },
    ],
  },
  {
    prompt: "What would feel most useful right now?",
    choices: [
      { label: "An explanation built from evidence and my child’s history.", score: "clarity" },
      { label: "A focused teaching plan with measurable progress.", score: "turnaround" },
      { label: "A place to learn, ask questions, and make better decisions.", score: "room" },
    ],
  },
  {
    prompt: "What have you already tried?",
    choices: [
      { label: "School meetings, practice, or tutoring, but I still have questions.", score: "clarity" },
      { label: "We already have assessment findings or a clear reading profile.", score: "turnaround" },
      { label: "I am gathering information before deciding what my child needs.", score: "room" },
    ],
  },
];

const results: Record<string, Result> = {
  clarity: {
    eyebrow: "Your strongest next step",
    title: "Start with the Reading Instruction Blueprint.",
    body: "A discovery call will help us talk through what you are seeing and decide whether a complete instructional review fits your family.",
    action: "Explore the Blueprint",
    href: "https://stan.store/brightspiralliteracy",
  },
  turnaround: {
    eyebrow: "Your strongest next step",
    title: "Talk with Dr. Jenn about specialist support.",
    body: "Reading Turnaround begins with a clear understanding of the child. A discovery call will help us review what you already know and identify the right starting point.",
    action: "Explore specialist support",
    href: "https://stan.store/brightspiralliteracy",
  },
  room: {
    eyebrow: "Your strongest next step",
    title: "Visit the Parent Reading Room.",
    body: "The Room gives international school parents practical guidance, live support, and a place to ask the questions that come up between school meetings.",
    action: "Explore the Parent Reading Room",
    href: "https://stan.store/brightspiralliteracy",
  },
};

export default function StartHere() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ clarity: 0, turnaround: 0, room: 0 });
  const [result, setResult] = useState<Result | null>(null);

  function choose(score: string) {
    const next = { ...scores, [score]: scores[score] + 1 };
    setScores(next);
    if (step === questions.length - 1) {
      const winner = Object.entries(next).sort((a, b) => b[1] - a[1])[0][0];
      setResult(results[winner]);
    } else {
      setStep(step + 1);
    }
  }

  function reset() {
    setStep(0);
    setScores({ clarity: 0, turnaround: 0, room: 0 });
    setResult(null);
  }

  return (
    <>
      <Header />
      <main className="next-step-page" id="main-content">
        <section className="next-step-intro">
          <p className="eyebrow">Find your next step</p>
          <h1>Three questions. One useful place to begin.</h1>
          <p>You do not need to know the right literacy term. Choose the answer closest to your family’s situation.</p>
        </section>
        <section className="quiz-shell" aria-live="polite">
          {!result ? (
            <>
              <div className="quiz-progress"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
              <p className="quiz-count">Question {step + 1} of {questions.length}</p>
              <h2>{questions[step].prompt}</h2>
              <div className="quiz-options">
                {questions[step].choices.map((choice) => (
                  <button key={choice.label} onClick={() => choose(choice.score)}>{choice.label}<span>→</span></button>
                ))}
              </div>
            </>
          ) : (
            <div className="quiz-result">
              <p className="eyebrow">{result.eyebrow}</p>
              <h2>{result.title}</h2>
              <p>{result.body}</p>
              <div className="actions">
                <Link className="button" href={result.href}>{result.action} <span>↗</span></Link>
                <button className="quiz-reset" onClick={reset}>Start again</button>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
