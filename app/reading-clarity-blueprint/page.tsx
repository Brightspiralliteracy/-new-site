import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "The Reading Clarity Blueprint",
  description: "Understand how your child reads, why reading breaks down, and what should happen next.",
};

const BLUEPRINT_CHECKOUT = "https://stan.store/brightspiralliteracy";
const CLARITY_CALL = "https://stan.store/brightspiralliteracy/p/reading-clarity-call";

export default function ReadingClarityBlueprint() {
  return (
    <>
      <Header />
      <main className="clarity-page" id="main-content">
        <section className="rce-hero">
          <div className="rce-hero-copy">
            <p className="eyebrow light">The Reading Clarity Blueprint</p>
            <h1>Know what your child needs to learn next.</h1>
            <p className="rce-lede">Dr. Jenn takes your family through a complete instructional decision process to show you how your child reads, where difficulty begins, and which priorities belong first, next, and later.</p>
            <div className="actions">
              <Link className="button button-yellow" href={BLUEPRINT_CHECKOUT}>Begin the Blueprint <span>↗</span></Link>
              <Link className="text-link light-link" href={CLARITY_CALL}>Not sure? Book a Reading Clarity Call <span>→</span></Link>
            </div>
            <p className="rce-price">€1,200 investment · Complete review, Reading Profile, teacher summary, and Eight-Week Reading Support Plan</p>
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
            <strong>The Reading Clarity Blueprint turns those disconnected pieces into clear instructional decisions.</strong>
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
            <strong>Your Reading Clarity Blueprint</strong>
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
            <p>This abbreviated fictional example shows how the Blueprint turns evidence into a parent-friendly plan you may use at home, share with school, or give to another tutor. Your child’s document is individualized and more detailed.</p>
          </div>
          <article className="sample-document" aria-label="Illustrative Reading Clarity Blueprint sample">
            <header>
              <div><span>Bright Spiral Literacy</span><strong>Reading Clarity Blueprint</strong></div>
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
              <div><span>Weeks 1–2</span><b>Begin the priority</b><p>Start targeted instruction and use brief, manageable practice at home.</p></div>
              <div><span>Weeks 3–4</span><b>Watch the response</b><p>Continue the priority and look for the first signs of greater accuracy and less guessing.</p></div>
              <div><span>Weeks 5–6</span><b>Build transfer</b><p>Connect the new skill to words, reading, and writing while adjusting support as needed.</p></div>
              <div><span>Weeks 7–8</span><b>Decide what comes next</b><p>Review the progress signals and decide whether to continue, adjust, or move to the next priority.</p></div>
            </div>
            <footer><span>What to do at home</span><span>What effective instruction includes</span><span>What to share with school</span><span>What progress looks like</span></footer>
          </article>
        </section>

        <section className="rce-value">
          <div className="rce-value-head">
            <p className="eyebrow">Your €1,200 investment</p>
            <h2>One decision-ready package. Nothing left for you to piece together.</h2>
            <p>The assessment sessions are one part of the work. Your investment covers the records review, evidence gathering, professional interpretation, parent-friendly Reading Profile, Eight-Week Reading Support Plan, parent consultation, one-page teacher summary, and expert recommendation.</p>
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
              <div><h3>Your parent-friendly Reading Profile</h3><p>You receive a clear explanation of strengths, developing skills, reading patterns, and the point where effort begins to increase.</p></div>
            </article>
            <article>
              <span>04</span>
              <div><h3>Your Personalized Eight-Week Reading Support Plan</h3><p>The plan names what to address first, what effective instruction should include, what to do at home, what to share with school, and what progress should look like. Use it yourself, share it with school, or give it to another tutor.</p></div>
            </article>
            <article>
              <span>05</span>
              <div><h3>A 45-minute interpretation consultation</h3><p>Dr. Jenn walks you through the evidence, answers your questions, and explains why each recommendation follows from your child’s profile.</p></div>
            </article>
            <article>
              <span>06</span>
              <div><h3>A one-page teacher summary</h3><p>You arrive at the next school conversation with a concise document naming strengths, the first instructional priority, helpful support, progress signals, and questions worth asking.</p></div>
            </article>
            <article>
              <span>07</span>
              <div><h3>An expert recommendation for what happens next</h3><p>Dr. Jenn explains whether the current support should continue, the school needs clearer priorities, another professional evaluation is appropriate, or Reading Turnaround fits. Enrollment in Reading Turnaround is not required.</p></div>
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
            <p>The Reading Clarity Blueprint does not promise an instant fix. It makes the next instructional decisions visible. You know what needs teaching, which support fits, what to ask the school, and how to recognize progress.</p>
            <strong>A parent-friendly Reading Profile you keep. An eight-week plan you understand. Clear guidance for every conversation ahead.</strong>
          </div>
        </section>

        <section className="rce-process">
          <p className="eyebrow">From your first form to your final plan</p>
          <h2>The process is thorough. Your role is simple.</h2>
          <div className="process-grid">
            <article><span>1</span><h3>Tell the story</h3><p>Complete the family background and share relevant records.</p></article>
            <article><span>2</span><h3>Meet Dr. Jenn</h3><p>Your child completes two 45-minute online assessment sessions.</p></article>
            <article><span>3</span><h3>Let us interpret</h3><p>Dr. Jenn analyzes the evidence and builds your Reading Profile and Eight-Week Reading Support Plan.</p></article>
            <article><span>4</span><h3>Understand it together</h3><p>Meet for a 45-minute parent consultation and ask every question.</p></article>
            <article><span>5</span><h3>Move forward</h3><p>Receive your complete documents within seven days of your child’s second assessment session.</p></article>
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
            <p className="eyebrow">A plan your family keeps</p>
            <h2>Use the plan with Bright Spiral, your school, another tutor, or at home.</h2>
          </div>
          <div>
            <p>Your €1,200 investment covers the complete Reading Clarity Blueprint. The plan belongs to your family. Reading Turnaround is optional and the Blueprint is not credited toward it.</p>
            <p>If the evidence supports ongoing instruction with Dr. Jenn, she will recommend a focused or comprehensive scope based on your child’s priorities, frequency, and expected duration.</p>
            <strong>Reading Turnaround ranges from €2,200 to €4,800, in addition to the Blueprint.</strong>
          </div>
        </section>

        <section className="clarity-commitment">
          <p className="eyebrow">The Bright Spiral clarity commitment</p>
          <h2>You should leave understanding the reading and the next step.</h2>
          <p>If you finish your consultation without understanding what is working, what is getting in the way, and what should happen next, Dr. Jenn will provide an additional clarification session at no additional cost.</p>
        </section>

        <section className="rce-final">
          <p className="eyebrow light">Ready to stop guessing?</p>
          <h2>You have spent enough time trying to piece this together alone.</h2>
          <p>If you already know the Reading Clarity Blueprint is the right step, begin now. If you are still deciding, book a Reading Clarity Call first.</p>
          <div className="actions">
            <Link className="button button-yellow" href={BLUEPRINT_CHECKOUT}>Begin the Reading Clarity Blueprint <span>↗</span></Link>
            <Link className="text-link light-link" href={CLARITY_CALL}>Not sure? Book a Reading Clarity Call <span>→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
