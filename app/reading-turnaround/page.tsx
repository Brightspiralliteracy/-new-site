import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "Reading Turnaround",
  description: "Private specialist literacy instruction built from your child’s Reading Clarity Blueprint.",
};

const BLUEPRINT = "/reading-clarity-blueprint";
const CLARITY_CALL = "https://stan.store/brightspiralliteracy/p/reading-clarity-call";

export default function ReadingTurnaround() {
  return (
    <>
      <Header />
      <main className="turnaround-page" id="main-content">
        <section className="turnaround-hero">
          <div>
            <p className="eyebrow light">Reading Turnaround</p>
            <h1>Your child is working hard. Reading should not still feel this hard.</h1>
            <p className="turnaround-lede">For families who are tired of watching a bright child guess, avoid, shut down, or say, “I’m just not a reader.” Reading Turnaround teaches the missing skills in the order your child needs them.</p>
            <div className="actions">
              <Link className="button button-yellow" href={BLUEPRINT}>Begin with the Reading Clarity Blueprint <span>↗</span></Link>
              <Link className="text-link light-link" href={CLARITY_CALL}>Not sure? Book a Reading Clarity Call <span>→</span></Link>
            </div>
            <p className="turnaround-price">€2,200 to €4,800 · Separate investment after the €1,200 Blueprint</p>
          </div>
          <aside className="parent-moment">
            <p>Perhaps you know this moment.</p>
            <blockquote>Homework is finished, but reading has become the argument everyone dreads.</blockquote>
            <p>Your child says the book is boring. You wonder whether to push, stop, wait, call the school, or find another tutor. Everyone has an opinion. No one has shown you why reading is still so difficult.</p>
          </aside>
        </section>

        <section className="turnaround-recognition">
          <p className="eyebrow">When effort is no longer the explanation</p>
          <h2>It is painful to watch your child begin to believe the struggle says something about who they are.</h2>
          <div className="recognition-grid">
            <p>They read the first part of a word and guess the rest.</p>
            <p>They understand stories you read aloud, then struggle to explain what they read alone.</p>
            <p>They once enjoyed books. Now every reading request becomes negotiation.</p>
            <p>You have added practice, apps, or tutoring. Progress still feels unclear.</p>
          </div>
          <div className="recognition-close">
            <p>Your child does not need another adult telling them to try harder.</p>
            <strong>They need teaching matched to the reason reading feels hard.</strong>
          </div>
        </section>

        <section className="old-new">
          <div className="old-new-intro">
            <p className="eyebrow">If you found this page after another frustrating school meeting</p>
            <h2>You were never asking for too much. You were asking for someone to explain the reading.</h2>
            <p>You have heard your child is “within range.” You have been told to keep reading every night. You have watched them work harder, get more frustrated, and begin to avoid the books they once chose for themselves.</p>
            <p>The problem is not a lack of concern, effort, or practice. The problem is a plan built without a clear explanation of what your child needs.</p>
          </div>
          <div className="old-new-grid">
            <article className="old-way">
              <p className="old-new-label">The old way</p>
              <h3>More reading. More guessing. More waiting.</h3>
              <ul>
                <li><span>01</span><div><b>Start with a level</b><p>Reduce the child’s reading to one broad number or band.</p></div></li>
                <li><span>02</span><div><b>Add more practice</b><p>Ask the child to spend more time doing the same difficult task.</p></div></li>
                <li><span>03</span><div><b>Call avoidance a motivation problem</b><p>Focus on compliance before asking why reading requires so much effort.</p></div></li>
                <li><span>04</span><div><b>Wait for the gap to become obvious</b><p>Hope maturity, a new teacher, or another school year resolves it.</p></div></li>
                <li><span>05</span><div><b>Report activity</b><p>Tell parents what the child completed, without showing what changed.</p></div></li>
              </ul>
              <blockquote>“We are doing everything they told us to do. Why is reading still ending in tears?”</blockquote>
            </article>
            <article className="new-way">
              <p className="old-new-label">The Bright Spiral way</p>
              <h3>Explain the difficulty. Teach the skill. Prove the change.</h3>
              <ul>
                <li><span>01</span><div><b>Start with the Reading Clarity Blueprint</b><p>See the strengths, gaps, effort, behavior, language history, and instructional history together.</p></div></li>
                <li><span>02</span><div><b>Find the friction</b><p>Identify the point where accurate, confident reading begins to break down.</p></div></li>
                <li><span>03</span><div><b>Teach what is missing</b><p>Give explicit instruction in the right skill, in the right sequence.</p></div></li>
                <li><span>04</span><div><b>Measure transfer</b><p>Look for the learning in unfamiliar words, real books, and schoolwork.</p></div></li>
                <li><span>05</span><div><b>Show parents the shift</b><p>Name what changed, what it means, and what comes next.</p></div></li>
              </ul>
              <blockquote>“For the first time, I understand why reading feels hard and what we are doing about it.”</blockquote>
            </article>
          </div>
          <div className="old-new-close">
            <p>This is the difference between keeping a child busy and changing how they read.</p>
            <Link className="button" href={BLUEPRINT}>Start with the Blueprint <span>↗</span></Link>
          </div>
        </section>

        <section className="turnaround-method">
          <div className="turnaround-method-head">
            <p className="eyebrow light">The Reading Turnaround Method</p>
            <h2>Four steps. Each one answers a question parents deserve to understand.</h2>
          </div>
          <div className="turnaround-steps">
            <article>
              <span>01</span>
              <div><h3>Find the friction</h3><h4>Where does reading begin to break down?</h4><p>We start with the Reading Clarity Blueprint. We identify the skills your child has, the strategies they use to compensate, and the precise point where effort begins to outweigh success.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Teach what is missing</h3><h4>What should we teach first?</h4><p>Lessons target the highest-priority skill in a deliberate sequence. Your child practices what moves reading forward, rather than completing more work at the same point of difficulty.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Measure the change</h3><h4>Is the teaching changing the reading?</h4><p>We look for transfer beyond the lesson. Is your child more accurate with unfamiliar words? Is reading less effortful? Are the new skills appearing in books and schoolwork? If the answer is no, the teaching changes.</p></div>
            </article>
            <article>
              <span>04</span>
              <div><h3>Make reading theirs</h3><h4>What changes when a child trusts their own reading?</h4><p>The goal reaches beyond a better score. We work toward a child who approaches a page with a plan, notices when meaning breaks down, and no longer needs an adult beside them for every difficult word.</p></div>
            </article>
          </div>
        </section>

        <section className="turnaround-shift">
          <div>
            <p className="eyebrow">What parents are buying</p>
            <h2>Not more lessons. A visible shift.</h2>
          </div>
          <div className="shift-list">
            <article><span>From</span><p>“We keep practicing, but nothing seems to stick.”</p><span>To</span><p>“I understand what she is learning and why it comes next.”</p></article>
            <article><span>From</span><p>“He says he hates reading.”</p><span>To</span><p>“He has a way into the word when it gets difficult.”</p></article>
            <article><span>From</span><p>“I do not know whether we should wait.”</p><span>To</span><p>“We have evidence, priorities, and progress we know how to recognize.”</p></article>
          </div>
        </section>

        <section className="turnaround-proof">
          <p className="eyebrow light">What it feels like when the right teaching reaches the child</p>
          <blockquote>“You are literally an angel!!!! I’m amazed at the growth Valentina has had in 2 weeks with you.”</blockquote>
          <p>Rebecca, parent</p>
        </section>

        <section className="turnaround-includes">
          <div className="turnaround-includes-head">
            <p className="eyebrow">What Reading Turnaround includes</p>
            <h2>You know what Dr. Jenn will teach, how often your child will meet, and how progress will be reviewed before you enroll.</h2>
            <p>Reading Turnaround is currently delivered personally by Dr. Jenn through private online instruction.</p>
          </div>
          <div className="turnaround-includes-grid">
            <article><span>01</span><h3>A plan built from the RCB</h3><p>Your child’s Reading Clarity Blueprint determines the instructional priorities and the order in which they are taught.</p></article>
            <article><span>02</span><h3>Private 30 to 45-minute lessons</h3><p>Lesson length and frequency are recommended from the RCB. Your child may meet once, twice, or more each week according to need.</p></article>
            <article><span>03</span><h3>Monitoring during every lesson</h3><p>Dr. Jenn watches how your child responds, records the evidence, and adjusts instruction when the reading is not changing as expected.</p></article>
            <article><span>04</span><h3>Parent updates and home guidance</h3><p>You know what your child is learning, what is changing, and how to reinforce progress without turning home into another classroom.</p></article>
            <article><span>05</span><h3>Formal progress reviews</h3><p>Reviews follow meaningful blocks of completed lessons rather than arbitrary calendar dates. You receive a clear explanation of progress and the next instructional decision.</p></article>
            <article><span>06</span><h3>A final review and written next step</h3><p>You finish with a summary of what changed, what still needs attention, and what should happen after Reading Turnaround.</p></article>
          </div>
        </section>

        <section className="turnaround-scopes">
          <div className="turnaround-scopes-intro">
            <p className="eyebrow light">The RCB determines the scope</p>
            <h2>Focused or Comprehensive. You do not have to choose.</h2>
            <p>Dr. Jenn recommends the appropriate scope after completing the Reading Clarity Blueprint and explains why it fits your child.</p>
          </div>
          <div className="scope-grid">
            <article>
              <span>Focused Reading Turnaround</span>
              <h3>One or two clearly defined instructional priorities.</h3>
              <p>For a child whose progress is being interrupted by a specific, bounded skill or reading pattern. The work concentrates on the priority most likely to move reading forward.</p>
              <small>Usually fewer lessons and a shorter engagement.</small>
            </article>
            <article>
              <span>Comprehensive Reading Turnaround</span>
              <h3>Several connected priorities taught in sequence.</h3>
              <p>For a child whose phonemic awareness, decoding, fluency, comprehension, or confidence are affecting one another. The plan strengthens those areas in the order the reading evidence requires.</p>
              <small>Usually more lessons, a longer engagement, and additional formal reviews.</small>
            </article>
          </div>
        </section>

        <section className="turnaround-fit">
          <div>
            <p className="eyebrow">Your exact recommendation comes first</p>
            <h2>No open-ended tutoring. No package selected from a menu.</h2>
            <p>After the RCB consultation, Dr. Jenn provides the recommended scope, lesson frequency, session length, estimated number of lessons, timeline, and fixed investment. You review the complete recommendation before deciding whether to enroll.</p>
          </div>
          <ul>
            <li>€1,200 Reading Clarity Blueprint completed first</li>
            <li>Focused or Comprehensive recommendation</li>
            <li>Private instruction with Dr. Jenn</li>
            <li>30 to 45-minute online lessons</li>
            <li>Frequency based on your child’s RCB findings</li>
            <li>Investment from €2,200 to €4,800</li>
            <li>No credit of the Blueprint investment</li>
          </ul>
        </section>

        <section className="turnaround-final">
          <p className="eyebrow light">Every Reading Turnaround begins with clarity</p>
          <h2>Your child has spent enough time wondering why reading feels harder for them.</h2>
          <p>If you already know the Reading Clarity Blueprint is the right step, begin there. If you are still deciding, book a Reading Clarity Call first.</p>
          <div className="actions">
            <Link className="button button-yellow" href={BLUEPRINT}>Begin with the Reading Clarity Blueprint <span>↗</span></Link>
            <Link className="text-link light-link" href={CLARITY_CALL}>Not sure? Book a Reading Clarity Call <span>→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
