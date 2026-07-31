"use client";

import { useMemo, useState } from "react";

const READING_ROOM = "https://www.skool.com/the-parent-reading-room-3199/about";

type Model = {
  number: string;
  title: string;
  short: string;
  idea: string;
  shift: string;
  action: string;
  prompt: string;
  options: string[];
};

const models: Model[] = [
  { number:"01", title:"Books are borrowed lives", short:"Reading gives your kid access to lives beyond their own.", idea:"Your kid gets one childhood. Through books, they enter thousands of lives, places, decisions, mistakes, and possibilities they may never meet firsthand.", shift:"Choose books for the experiences and perspectives they offer, not reading level alone.", action:"After reading, ask: What did this character understand by the end that they did not understand at the beginning?", prompt:"What draws your kid into a book?", options:["A character they care about","A world they want to explore","Facts about an interest","We are still figuring this out"] },
  { number:"02", title:"Reading is a dashboard", short:"“Struggling with reading” is a starting point, not a diagnosis.", idea:"Reading reflects several systems working together: decoding, fluency, vocabulary, language, knowledge, and attention. A score or level shows performance. It does not explain why reading feels hard.", shift:"Look for the point where reading begins to break down before choosing more practice.", action:"Notice whether your kid struggles to read the words, read smoothly, understand the language, connect ideas, or explain what they read.", prompt:"Where does reading seem to become difficult?", options:["Working out the words","Reading smoothly","Understanding the ideas","I cannot tell yet"] },
  { number:"03", title:"Confidence needs receipts", short:"Believable confidence grows from evidence of progress.", idea:"Telling a worried kid they are a great reader rarely changes what they believe. They need repeated, specific proof that their actions led to progress.", shift:"Move from broad reassurance to naming the skill your kid used.", action:"Replace “Great reading” with “You noticed that did not make sense, went back, and fixed it yourself.”", prompt:"Which description feels closest to your kid?", options:["Avoids reading before starting","Reads but doubts themselves","Feels confident until it gets hard","Confidence is not a concern"] },
  { number:"04", title:"Conversation is the first literacy curriculum", short:"Rich talk builds the language written texts later demand.", idea:"Long before kids understand written language, they build meaning through spoken language. Explanations, debates, stories, jokes, and questions prepare them to understand and express complex ideas.", shift:"Treat family conversation as part of literacy development, without turning dinner into a lesson.", action:"Ask one question without a single correct answer: What changed your mind about something recently?", prompt:"Which kind of conversation happens most naturally at home?", options:["Telling stories","Explaining how things work","Debating ideas","Quick practical talk"] },
  { number:"05", title:"Vocabulary changes what kids notice", short:"A new word gives your kid a new distinction.", idea:"“Upset” might mean disappointed, embarrassed, frustrated, resentful, or overwhelmed. Precise words help kids understand texts, explain ideas, and make sense of their own experiences.", shift:"Do not simplify every unfamiliar word. Explain it, connect it, and keep using it.", action:"Choose one useful word from real life. Discuss what it means, when it applies, and when it does not.", prompt:"What happens when your kid meets an unfamiliar word?", options:["Asks what it means","Uses context to guess","Skips over it","I usually simplify it first"] },
  { number:"06", title:"Fluent writing protects the idea", short:"A strong thinker may still struggle to get ideas onto the page.", idea:"When letter formation and spelling demand too much attention, kids have less mental space for planning, sentence construction, and expression. The idea may disappear before it reaches the page.", shift:"Separate the quality of the idea from the effort required to record it.", action:"Ask your kid to explain an idea aloud before writing. Compare the richness of what they said with what reached the page.", prompt:"What do you notice when your kid writes?", options:["Ideas flow onto the page","Writing is slow or tiring","Spelling interrupts ideas","They say far more than they write"] },
  { number:"07", title:"Literacy is intellectual self-defense", short:"Deeply literate kids do not accept every confident claim as truth.", idea:"Strong literacy helps kids examine claims, compare perspectives, notice missing information, and form their own conclusions. Critical thinking depends on knowledge, comprehension, and language.", shift:"Do not tell kids what to think. Give them questions for examining what they encounter.", action:"Ask: Who created this? What do they want us to believe? What evidence do they give? What might be missing?", prompt:"How often does your family question information together?", options:["Often","Sometimes","Rarely","I want to start"] },
];

const auditItems = [
  "We talk about ideas, not only schedules and tasks.",
  "My kid reads beyond assigned schoolwork.",
  "We use and explain precise, interesting words.",
  "My kid has space to disagree and explain why.",
  "Writing serves a real purpose at home sometimes.",
  "We examine claims instead of accepting them immediately.",
  "Feedback names what my kid did, not only how well they did.",
];

export default function DangerouslyLiterateLab() {
  const [started, setStarted] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showAudit, setShowAudit] = useState(false);
  const [audit, setAudit] = useState<number[]>(Array(7).fill(1));
  const [showResult, setShowResult] = useState(false);
  const progress = showResult ? 100 : showAudit ? 88 : started ? ((modelIndex + 1) / 8) * 88 : 0;
  const focusIndex = useMemo(() => audit.indexOf(Math.min(...audit)), [audit]);

  const restart = () => {
    setStarted(false); setModelIndex(0); setAnswers({}); setShowAudit(false); setShowResult(false); setAudit(Array(7).fill(1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!started) return (
    <main id="main-content" className="dl-shell">
      <section className="dl-hero">
        <div>
          <p className="dl-eyebrow">A free 10-minute parent experience</p>
          <h1>Raise a kid who is <em>dangerously literate.</em></h1>
          <p className="dl-lede">Explore seven mental models for raising a kid who reads deeply, communicates clearly, and thinks for themselves.</p>
          <button className="dl-primary" onClick={() => setStarted(true)}>Start with model one <span>→</span></button>
          <small>No tests. No reading logs. No account required.</small>
        </div>
        <aside>
          <span>THE DANGEROUSLY LITERATE KID LAB</span>
          <strong>7</strong>
          <p>ideas that change how you see reading, writing, and your kid’s developing mind.</p>
          <small>Designed for parents of kids ages 5 to 11</small>
        </aside>
      </section>
      <section className="dl-preview">
        <p>Inside the guide</p>
        <div>{models.map(item => <article key={item.number}><b>{item.number}</b><span>{item.title}</span></article>)}</div>
      </section>
    </main>
  );

  if (showResult) {
    const focus = models[focusIndex];
    return <main id="main-content" className="dl-shell dl-experience">
      <DlTop progress={progress} restart={restart} />
      <section className="dl-result">
        <p className="dl-eyebrow">Your starting point</p>
        <h1>Start with <em>{focus.title}</em></h1>
        <p className="dl-result-lede">Your responses suggest this model deserves attention first. This is not a score or diagnosis. It is one useful place to begin noticing.</p>
        <div className="dl-result-grid"><article><span>TRY THIS WEEK</span><p>{focus.action}</p></article><article><span>NOTICE</span><p>{focus.shift}</p></article></div>
        <section className="dl-room">
          <div><p className="dl-eyebrow">Launching August 2026</p><h2>Knowing the models is the beginning. Applying them to <em>your kid</em> is the work.</h2><p>Inside the Parent Reading Room, bring your questions, school reports, concerns, and observations. Get expert help understanding what you are seeing and deciding what to do next.</p></div>
          <a href={READING_ROOM} target="_blank" rel="noreferrer"><small>Launching August 2026</small>Explore the Parent Reading Room <span>→</span></a>
        </section>
        <div className="dl-result-actions"><button onClick={() => window.print()}>Save my starting point</button><button onClick={restart}>Start again</button></div>
      </section>
    </main>;
  }

  if (showAudit) return <main id="main-content" className="dl-shell dl-experience">
    <DlTop progress={progress} restart={restart} />
    <section className="dl-audit">
      <p className="dl-eyebrow">A quick family reflection</p>
      <h1>Where is literacy already <em>alive</em> in your home?</h1>
      <p>Choose what feels true today. This is a reflection, not a parenting scorecard.</p>
      <div className="dl-audit-list">{auditItems.map((item,index) => <div className="dl-audit-row" key={item}><span>{item}</span><div role="group" aria-label={item}>{[0,1,2].map(value => <button key={value} className={audit[index] === value ? "active" : ""} onClick={() => setAudit(audit.map((v,i) => i === index ? value : v))}>{["Not yet","Sometimes","Often"][value]}</button>)}</div></div>)}</div>
      <button className="dl-primary dl-audit-submit" onClick={() => { setShowAudit(false); setShowResult(true); window.scrollTo(0,0); }}>Show my starting point <span>→</span></button>
    </section>
  </main>;

  const model = models[modelIndex];
  return <main id="main-content" className="dl-shell dl-experience">
    <DlTop progress={progress} restart={restart} />
    <section className="dl-model-layout">
      <aside className="dl-rail"><span>Your guide</span>{models.map((item,index) => <button key={item.number} className={index === modelIndex ? "current" : index < modelIndex ? "complete" : ""} onClick={() => { if (answers[index] !== undefined || index <= modelIndex) { setModelIndex(index); window.scrollTo(0,0); } }}><i>{index < modelIndex ? "✓" : item.number}</i><b>{item.title}</b></button>)}</aside>
      <div className="dl-model-heading"><p>MENTAL MODEL {model.number} <span>OF 07</span></p><h1>{model.title}</h1><div>{model.short}</div></div>
      <div className="dl-model-content">
        <section className="dl-idea"><span>THE IDEA</span><p>{model.idea}</p></section>
        <div className="dl-shifts"><article><span>THE PARENT SHIFT</span><p>{model.shift}</p></article><article><span>TRY THIS</span><p>{model.action}</p></article></div>
        <section className="dl-reflection"><h2>{model.prompt}</h2><div>{model.options.map((option,index) => <button key={option} className={answers[modelIndex] === index ? "selected" : ""} onClick={() => setAnswers({...answers,[modelIndex]:index})}><i>{String.fromCharCode(65+index)}</i>{option}<b>{answers[modelIndex] === index ? "✓" : ""}</b></button>)}</div></section>
        <nav className="dl-navigation"><button disabled={modelIndex === 0} onClick={() => { setModelIndex(modelIndex-1); window.scrollTo(0,0); }}>← Previous</button><button className="dl-primary" disabled={answers[modelIndex] === undefined} onClick={() => { if(modelIndex < 6) setModelIndex(modelIndex+1); else setShowAudit(true); window.scrollTo(0,0); }}>{modelIndex < 6 ? "Next model" : "Take the family reflection"} <span>→</span></button></nav>
      </div>
    </section>
  </main>;
}

function DlTop({ progress, restart }:{ progress:number; restart:()=>void }) {
  return <><div className="dl-top"><button onClick={restart}>Bright Spiral Literacy</button><span>THE DANGEROUSLY LITERATE KID LAB</span><small>About 10 minutes</small></div><div className="dl-progress"><i style={{width:`${progress}%`}} /></div></>;
}
