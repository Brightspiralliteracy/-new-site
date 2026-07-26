import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "The Reading Instruction Blueprint",
  description: "Understand how your child reads, why reading breaks down, and what should happen next.",
};

const NEXT_STEP = "https://stan.store/brightspiralliteracy";

export default function ReadingInstructionBlueprint() {
  return (
    <>
      <Header />
      <main className="clarity-page" id="main-content">
        <section className="rce-hero">
          <div className="rce-hero-copy">
            <p className="eyebrow light">The Reading Instruction Blueprint</p>
            <h1>Know what your child needs to learn next.</h1>
            <p className="rce-lede">Dr. Jenn takes your family through a complete instructional decision process to show you how your child reads, where difficulty begins, and which priorities belong first, next, and later.</p>
            <div className="actions">
              <Link className="button button-yellow" href={NEXT_STEP}>Explore the Blueprint <span>↗</span></Link>
              <span className="rce-price">€1,200 investment · Complete review and Instruction Blueprint</span>
            </div>
          </div>
          <aside className="rce-answer-card">
            <p className="answer-label">You leave with one clear answer to each question</p>
            <div><span>01</span><p>What is already working?</p></div>
            <div><span>02</span><p>Where does reading break down?</p></div>
            <div><span>03</span><p>Why is it happening?</p></div>
            <div><span>04</span><p>What should happen first?</p></div>
          </aside>
        </section>

        <section className="rce-recognition">
          <div>
            <p className="eyebrow">For the parent carrying a folder full of information and no real explanation</p>
            <h2>You have data. You have opinions. You still do not know what to do Monday.</h2>
          </div>
          <div className="rce-recognition-copy">
            <p>The school says your child is within range. The tutor says they need more practice. Your child reads some books easily and falls apart with others. They speak English fluently, so someone assumes language is not relevant. Or they are multilingual, so every concern gets explained away as language.</p>
            <p>Meanwhile, you are trying to decide whether to wait, change tutors, request testing, speak to the school again, or push harder at home.</p>
            <strong>The Reading Instruction Blueprint turns those disconnected pieces into clear instructional decisions.</strong>
          </div>
        </section>

        <section className="rce-definition">
          <p className="eyebrow light">Evidence becomes a decision</p>
          <h2>A complete instructional picture built around one child.</h2>
          <p>This is not a reading level, a tutoring intake, or a stack of scores. Dr. Jenn reviews your child’s language and educational history, gathers evidence across the literacy skills connected to your concern, and translates the findings into instructional priorities your family understands.</p>
          <div className="definition-strip">
            <span>Assessment evidence</span>
            <b>+</b>
            <span>Your child’s context</span>
            <b>+</b>
            <span>Professional interpretation</span>
            <b>=</b>
            <strong>Your Instruction Blueprint</strong>
          </div>
        </section>

        <section className="rce-transformation">
          <div className="rce-before">
            <p className="eyebrow">Before</p>
            <h3>“Something is not adding up.”</h3>
            <ul>
              <li>Scores without an explanation</li>
              <li>Conflicting advice from different adults</li>
              <li>Uncertainty about language versus reading</li>
              <li>Practice without a clear target</li>
              <li>No shared plan between home and school</li>
            </ul>
          </div>
          <div className="rce-after">
            <p className="eyebrow light">After</p>
            <h3>“I understand the reading, and I know what comes next.”</h3>
            <ul>
              <li>Your child’s strengths named clearly</li>
              <li>The point of difficulty identified</li>
              <li>The highest-priority skill placed first</li>
              <li>First, next, and later priorities</li>
              <li>A concise summary for the school</li>
            </ul>
          </div>
        </section>

        <section className="blueprint-sample">
          <div className="blueprint-sample-intro">
            <p className="eyebrow light">See what you take home</p>
            <h2>A plan built for decisions, not a report built for a drawer.</h2>
            <p>This abbreviated fictional example shows how the Blueprint turns evidence into priorities, roles, and a 90-day plan. Your child’s document is individualized and more detailed.</p>
          </div>
          <article className="sample-document" aria-label="Illustrative Reading Instruction Blueprint sample">
            <header>
              <div><span>Bright Spiral Literacy</span><strong>Reading Instruction Blueprint</strong></div>
              <small>Illustrative sample · Age 8 · Multilingual learner</small>
            </header>
            <section>
              <p>What is already working</p>
              <h3>Strong oral language, curiosity, and story understanding.</h3>
              <p>This child explains complex ideas when listening and uses background knowledge well.</p>
            </section>
            <section className="sample-priority">
              <p>Teach first</p>
              <h3>Read unfamiliar vowel patterns accurately without guessing from context.</h3>
              <p>Why first: word-reading effort is limiting fluency and reducing attention available for meaning.</p>
            </section>
            <div className="sample-plan">
              <div><span>Days 1–30</span><b>Build accuracy</b><p>Specialist teaches the priority pattern sequence. Family protects reading confidence and avoids extra drills.</p></div>
              <div><span>Days 31–60</span><b>Build transfer</b><p>Specialist checks unfamiliar words and connected text. School reinforces shared language.</p></div>
              <div><span>Days 61–90</span><b>Review the evidence</b><p>Team looks for accuracy, reduced guessing, smoother reading, and stronger independence.</p></div>
            </div>
            <footer><span>Home role</span><span>School role</span><span>Specialist role</span><span>Progress signals</span></footer>
          </article>
        </section>

        <section className="rce-value">
          <div className="rce-value-head">
            <p className="eyebrow">Your €1,200 investment</p>
            <h2>One decision-ready package. Nothing left for you to piece together.</h2>
            <p>The sessions are one part of the work. Your investment covers the records review, evidence gathering, professional interpretation, written Instruction Blueprint, parent consultation, and school-ready summary.</p>
          </div>
          <div className="value-stack">
            <article>
              <span>01</span>
              <div><h3>The full story before testing begins</h3><p>Dr. Jenn reviews educational history, languages, school moves, reports, test results, previous support, and your observations. This prevents one score from being interpreted without context.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Two focused assessment sessions</h3><p>Your child meets individually with Dr. Jenn for two 45-minute online sessions. Tasks are selected to investigate the concern, not administered because they happen to appear in a standard package.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Your written Reading Instruction Blueprint</h3><p>You receive a clear explanation of strengths, developing skills, patterns, and instructional priorities organized by what belongs first, next, and later.</p></div>
            </article>
            <article>
              <span>04</span>
              <div><h3>A 45-minute interpretation consultation</h3><p>Dr. Jenn walks you through the evidence, answers your questions, and explains why each recommendation follows from your child’s profile.</p></div>
            </article>
            <article>
              <span>05</span>
              <div><h3>Clear roles and recommendations</h3><p>You know what belongs at home, what requires skilled instruction, who should provide it, and what evidence of progress to watch for.</p></div>
            </article>
            <article>
              <span>06</span>
              <div><h3>A school-ready summary</h3><p>You arrive at the next school conversation with a concise document, shared language, and specific questions. You no longer have to explain the concern from memory.</p></div>
            </article>
          </div>
        </section>

        <section className="rce-anchor">
          <div>
            <p className="eyebrow light">Why families invest</p>
            <h2>The investment is €1,200. The value shapes every decision after it.</h2>
          </div>
          <div>
            <p>Families often arrive after paying for tutoring, adding practice, buying programs, and holding repeated school meetings without a shared explanation of the reading.</p>
            <p>The Reading Instruction Blueprint does not promise an instant fix. It makes the next instructional decisions visible. You know what needs teaching, which support fits, what to ask the school, and how to recognize progress.</p>
            <strong>A written Blueprint you keep. Priorities you understand. Language you use in every conversation ahead.</strong>
          </div>
        </section>

        <section className="rce-process">
          <p className="eyebrow">From your first form to your final roadmap</p>
          <h2>The process is thorough. Your role is simple.</h2>
          <div className="process-grid">
            <article><span>1</span><h3>Tell the story</h3><p>Complete the family background and share relevant records.</p></article>
            <article><span>2</span><h3>Meet Dr. Jenn</h3><p>Your child completes two 45-minute online assessment sessions.</p></article>
            <article><span>3</span><h3>Let us interpret</h3><p>Dr. Jenn analyzes the evidence and builds the Instruction Blueprint.</p></article>
            <article><span>4</span><h3>Understand it together</h3><p>Meet for a 45-minute parent consultation and ask every question.</p></article>
            <article><span>5</span><h3>Move forward</h3><p>Receive the Blueprint, ordered priorities, and school-ready summary.</p></article>
          </div>
        </section>

        <section className="rce-boundary">
          <div>
            <p className="eyebrow">Clear about what it is. Clear about what it is not.</p>
          <h2>This is an instructional decision process, not a diagnosis.</h2>
          </div>
          <div>
            <p>It does not provide a medical or clinical diagnosis. It does explain the literacy evidence in plain language, identify instructional priorities, and help your family decide what should happen next.</p>
            <p>When the evidence suggests another professional evaluation would be useful, Dr. Jenn will explain why and help you understand the question you are taking to that professional.</p>
          </div>
        </section>

        <section className="blueprint-next-step">
          <div>
            <p className="eyebrow">If your child needs ongoing specialist teaching</p>
            <h2>The Blueprint comes first. Reading Turnaround is a separate investment.</h2>
          </div>
          <div>
            <p>Your €1,200 investment covers the complete Reading Instruction Blueprint. If the evidence supports ongoing instruction with Dr. Jenn, she will recommend a custom Reading Turnaround scope based on your child’s priorities, frequency, and expected duration.</p>
            <strong>Reading Turnaround begins at €2,200, in addition to the Blueprint.</strong>
          </div>
        </section>

        <section className="rce-final">
          <p className="eyebrow light">Begin with the right next step</p>
          <h2>You have spent enough time trying to piece this together alone.</h2>
          <p>Tell Dr. Jenn what you are seeing. The discovery call will help you decide whether the Reading Instruction Blueprint is the right first step for your child.</p>
          <div className="actions">
            <Link className="button button-yellow" href={NEXT_STEP}>Explore the Blueprint <span>↗</span></Link>
            <span>€1,200 investment · Complete review and Instruction Blueprint</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
