import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../page";

export const metadata: Metadata = { title: "What 15 Years in Education Made Me Care Less About", description: "Dr. Jenn Overstreet on the evidence that matters when a child reads." };

export default function Article() {
  return (
    <>
      <Header />
      <main className="article-page" id="main-content">
        <header className="article-hero article-hero-yellow">
          <p className="eyebrow">From Dr. Jenn’s notebook · 7 min read</p>
          <h1>What 15 Years in Education Made Me Care Less About</h1>
          <p className="article-deck">And what I pay far more attention to now.</p>
          <p className="article-byline">Expanded from Dr. Jenn’s Instagram notebook</p>
        </header>
        <article className="article-body">
          <p className="article-lead">After 15 years in education, there are some things I’ve become dramatically less impressed by.</p>
          <p>A child reading the thickest book in the class. A tidy level printed at the top of a report. A page read quickly enough to sound fluent. A program with beautiful materials and a long list of promises.</p>
          <p>None of those things is meaningless. They are simply not explanations.</p>
          <p>What I care about far more now is what a child does when the reading becomes unfamiliar.</p>
          <h2>I care less about the level</h2>
          <p>A level can tell us where a text sits within a system. It cannot tell us how a child arrived there, what they did to read it, or why the next text became difficult.</p>
          <p>Two children can receive the same score for very different reasons. One may read words accurately but lose meaning across a long sentence. Another may understand the topic beautifully and use that knowledge to guess at words they cannot yet read. The number can be the same. The instruction should not be.</p>
          <blockquote>A reading level is not a reading explanation.</blockquote>
          <h2>I care less about reading that only sounds good</h2>
          <p>Fluent reading matters. But smooth delivery can hide a surprising amount. Children are clever. They use memory, pictures, context, and knowledge of how stories work. Those strengths are useful, and I want them to keep using them.</p>
          <p>I also want to know what happens when the picture disappears, the topic is unfamiliar, or the word cannot be guessed from its first letter. Does the child have a reliable way forward?</p>
          <h2>I care more about behavior</h2>
          <p>A child who needs water three times during ten minutes of reading may be telling us something. So may the child who races through punctuation, watches the adult’s face after every word, quietly substitutes a plausible word, or remembers every detail from a read-aloud but almost nothing from independent reading.</p>
          <p>Behavior during reading can matter more than the score because it shows us where effort, uncertainty, and confidence live.</p>
          <p>This does not mean every sigh is evidence of a reading difficulty. It means we stay curious long enough to look for a pattern.</p>
          <h2>I care more about the child’s history</h2>
          <p>International school children rarely have tidy educational histories. They move between countries, languages, curricula, and teaching sequences. A concept one school considers secure may be introduced later in another. A child may sound completely fluent in conversational English and still be building the vocabulary and syntax needed for deep reading comprehension.</p>
          <p>That history is not background paperwork. It changes how I interpret the reading in front of me.</p>
          <h2>I care whether the teaching changes the reading</h2>
          <p>Time is not an intervention. Practice is not automatically instruction. If a child repeats the same strategy for six more months, they may simply become more efficient at using a strategy that was not working.</p>
          <blockquote>More practice does not fix a missing skill.</blockquote>
          <p>I want to know what skill is being taught, why it was selected, how it connects to what the child already knows, and what we expect to see change. Then I watch. If the reading does not change, the teaching has to.</p>
          <h2>What impresses me now</h2>
          <p>I am impressed by the child who meets an unfamiliar word and has a plan. By the reader who notices that a sentence stopped making sense and goes back. By the parent who says, “I cannot name it yet, but something does not add up.” By the teacher who is willing to change course when a child’s response asks them to.</p>
          <p>I am impressed by progress we can see and name.</p>
          <p>After 15 years, I trust evidence more than performance. I trust curiosity more than a quick conclusion. And I have learned that looking closer is not the same thing as assuming the worst.</p>
          <p>It is how we replace worry with a useful question.</p>
        </article>
        <aside className="article-cta"><p className="eyebrow light">Start with the useful question</p><h2>What is happening when your child reads?</h2><Link className="button button-yellow" href="https://stan.store/brightspiralliteracy">Choose your next step <span>↗</span></Link></aside>
      </main>
      <Footer />
    </>
  );
}
