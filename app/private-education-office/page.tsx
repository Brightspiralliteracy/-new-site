import type { Metadata } from "next";
import Link from "next/link";
import { AdvisoryInquiry } from "../private-advisory/AdvisoryInquiry";

export const metadata: Metadata = {
  title: "Private Education Advisory",
  description: "Discreet private teaching and educational oversight for globally mobile families.",
  robots: { index: false, follow: false, nocache: true },
};

const Mark = () => (
  <span className="mark" aria-hidden="true">
    <svg viewBox="0 0 48 48" role="presentation" focusable="false">
      <path className="mark-page mark-page-left" d="M8 11.5c5.7-2.1 11.1-1.7 16 1.2v25.8c-4.9-2.9-10.3-3.3-16-1.2V11.5Z" />
      <path className="mark-page mark-page-right" d="M40 11.5c-5.7-2.1-11.1-1.7-16 1.2v25.8c4.9-2.9 10.3-3.3 16-1.2V11.5Z" />
      <path className="mark-outline" d="M8 11.5c5.7-2.1 11.1-1.7 16 1.2 4.9-2.9 10.3-3.3 16-1.2v25.8c-5.7-2.1-11.1-1.7-16 1.2-4.9-2.9-10.3-3.3-16-1.2V11.5Z" />
      <path className="mark-fold" d="M24 12.7v25.8" />
    </svg>
  </span>
);

export default function PrivateEducationAdvisory() {
  return (
    <main className="pea-page" id="main-content">
      <header className="pea-header">
        <Link className="brand" href="/" aria-label="Bright Spiral Literacy home"><Mark /><span>Bright Spiral<br />Literacy</span></Link>
        <span>Private Education Advisory</span>
      </header>

      <section className="pea-hero">
        <div className="pea-hero-copy">
          <p className="eyebrow light">For globally mobile private families and family offices</p>
          <h1>One educational vision for every child in your family, wherever life takes you.</h1>
          <p className="pea-lede">Dr. Jenn provides private online literacy teaching and discreet strategic oversight across siblings, educators, residences, and American, British, and international curricula.</p>
          <a className="button button-yellow" href="#private-inquiry">Request a confidential conversation <span>↓</span></a>
        </div>
        <figure className="pea-hero-image">
          <img src="/images/dr-jenn-workshop.webp" alt="Dr. Jenn Overstreet in conversation with educators" />
          <figcaption><strong>Dr. Jenn Overstreet</strong><span>International education strategist<br />Founder &amp; Chief Learning Officer</span></figcaption>
        </figure>
      </section>

      <section className="pea-distinction">
        <p className="eyebrow">The role</p>
        <div>
          <h2>Every child has an individual path. The family still needs one coherent direction.</h2>
          <p>Dr. Jenn studies each child closely, then keeps the family’s wider educational priorities aligned across siblings, educators, schools, travel, and curriculum changes. Her experience across American, British, and international systems helps her see where approaches align, where expectations differ, and what each child needs next.</p>
        </div>
      </section>

      <section className="pea-video-section">
        <div className="pea-video-copy">
          <p className="eyebrow">Meet Dr. Jenn</p>
          <h2>A close view of each child. A clear view of the whole education.</h2>
          <p>Dr. Jenn has taught children directly, coached educators, led schools, designed curriculum, prepared future teachers, and advised international families. She knows what strong instruction looks like and how to keep a team focused on the same educational priorities.</p>
          <div className="pea-credentials">
            <span>16+ years in education</span>
            <span>Teacher and school leader</span>
            <span>American, British, and international curricula</span>
          </div>
        </div>
        <video className="pea-video" controls preload="metadata" poster="/images/dr-jenn-founder-video-poster.jpg">
          <source src="https://bright-spiral-literacy.jlaoverstreet.chatgpt.site/videos/dr-jenn-founder.mp4" type="video/mp4" />
          Your browser does not support this video.
        </video>
      </section>

      <section className="pea-paths">
        <div className="pea-paths-intro">
          <p className="eyebrow">Two ways to engage</p>
          <h2>Private teaching, educational oversight, or both.</h2>
          <p>Some families want Dr. Jenn to teach one or more children. Others already have educators in place and need one experienced person looking across the family’s whole educational experience.</p>
        </div>
        <div className="pea-paths-grid">
          <article>
            <span>01 · Direct education services</span>
            <h3>Private online literacy teaching</h3>
            <p>Dr. Jenn teaches children to read with accuracy, confidence, and independence. Instruction begins with careful assessment and may extend into deeper comprehension, critical thinking, precise communication, and the habit of asking better questions.</p>
          </article>
          <article>
            <span>02 · Whole-family educational strategy</span>
            <h3>Educational oversight</h3>
            <p>Dr. Jenn works alongside parents, family offices, tutors, and private educators to set priorities, review progress, strengthen instruction, and maintain one coherent direction across the year.</p>
          </article>
        </div>
        <p className="pea-paths-note">These services work separately or together. The structure follows the children, the existing team, and the level of support the family wants.</p>
      </section>

      <section className="pea-dangerous">
        <div className="pea-dangerous-copy">
          <p className="eyebrow">From Dr. Jenn’s notebook</p>
          <h2>Literacy is the capacity. Being dangerously literate is how a child uses it.</h2>
          <p>A dangerously literate child identifies, understands, interprets, creates, and communicates. Then they go further. They question claims, seek context, connect ideas, challenge assumptions, rethink positions, and act on what they know.</p>
          <blockquote>Strong readers understand the page. Independent thinkers decide what deserves their belief.</blockquote>
        </div>
        <figure className="pea-dangerous-visual">
          <img src="https://bright-spiral-literacy.jlaoverstreet.chatgpt.site/images/dangerously-literate-framework.jpeg" alt="Dr. Jenn’s visual framework showing the capacities of literacy and six habits of a dangerously literate reader" />
          <figcaption>Dr. Jenn’s framework for moving from literacy skills to independent judgment.</figcaption>
        </figure>
      </section>

      <section className="pea-view">
        <div className="pea-view-heading">
          <p className="eyebrow light">A longer view</p>
          <h2>Beyond “Are they on grade level?”</h2>
        </div>
        <div className="pea-view-copy">
          <p>The more useful questions are more ambitious.</p>
          <blockquote>What level of thinking is this child ready for? Do their academic skills give them access to it? Where should we raise the ceiling?</blockquote>
        </div>
      </section>

      <section className="pea-scope">
        <div className="pea-scope-intro">
          <p className="eyebrow">Across the educational experience</p>
          <h2>One person keeping sight of the whole child and the whole year.</h2>
          <p>The scope reflects the family. Dr. Jenn may begin before educators are appointed or work quietly alongside an established team.</p>
        </div>
        <div className="pea-scope-grid">
          <article><span>01</span><h3>Know each learner</h3><p>Build a clear profile of strengths, needs, interests, learning history, and readiness for greater complexity.</p></article>
          <article><span>02</span><h3>Set the direction</h3><p>Establish ambitious priorities across reading, writing, mathematics, inquiry, research, and intellectual development.</p></article>
          <article><span>03</span><h3>Strengthen the team</h3><p>Review plans and student work, coach educators, and support sound instructional decisions without replacing the people who teach each day.</p></article>
          <article><span>04</span><h3>Maintain continuity</h3><p>Keep learning coherent as countries, schedules, tutors, interests, and educational environments change.</p></article>
        </div>
      </section>

      <section className="pea-interests">
        <div>
          <p className="eyebrow">Interests become intellectual pathways</p>
          <h2>Chess is never only chess.</h2>
        </div>
        <p>Strategy opens into mathematics, history, biography, writing, decision-making, and complex problem solving. The same applies to science, languages, art, music, and the places a family encounters. Dr. Jenn helps the educational team find the academic depth inside what already interests the child.</p>
      </section>

      <section className="pea-beginnings">
        <div className="pea-beginnings-photo"><img src="/images/dr-jenn-presentation.webp" alt="Dr. Jenn leading professional learning" /></div>
        <div>
          <p className="eyebrow light">Before the year begins</p>
          <h2>Establish the vision before building the timetable.</h2>
          <p>When a family is appointing private educators, Dr. Jenn helps assess candidates through an instructional lens, establish expectations, and define an individual pathway for each child.</p>
          <ul>
            <li>Educator interviews and candidate evaluation</li>
            <li>Learning priorities for each child</li>
            <li>Expectations for planning, assessment, and communication</li>
            <li>A shared definition of rigor, progress, and independence</li>
          </ul>
        </div>
      </section>

      <section className="pea-proof">
        <div>
          <p className="eyebrow">Dr. Jennifer Overstreet</p>
          <h2>Built in classrooms. Refined in leadership. Designed for international lives.</h2>
        </div>
        <div className="pea-proof-details">
          <p>Dr. Jenn brings more than 16 years across classroom teaching, literacy instruction, instructional coaching, school leadership, teacher education, curriculum design, and international consulting.</p>
          <p>Her roles have included Head of School, Director of Teaching and Learning, and Instructional Coach across the United States, Europe, and the Middle East.</p>
          <p>Her value to a private family is range. She reads the child closely, evaluates the quality of instruction, coaches the adults, and keeps daily decisions tied to the family’s larger educational priorities.</p>
        </div>
      </section>

      <section className="pea-fit">
        <p className="eyebrow light">A deliberately limited practice</p>
        <h2>For families who expect the parts of an education to add up.</h2>
        <p>The goal is one strategy, a high standard of teaching, and a trusted advisor who sees the whole educational picture.</p>
        <strong>Dr. Jenn accepts a small number of private families so she remains close to the children, the work, and the decisions carrying the most consequence.</strong>
      </section>

      <section className="pea-privacy">
        <p className="eyebrow">Private by design</p>
        <div>
          <h2>Your children’s education remains your family’s business.</h2>
          <p>Bright Spiral Literacy treats every engagement with discretion. Family names, student stories, educational records, travel details, and identifying information are never published without explicit written permission.</p>
          <p>Information is shared only with the parents, family office, and educators the family authorizes. Communication, reporting, and meetings follow the family’s preferred channels and circle of access.</p>
        </div>
      </section>

      <section className="pea-inquiry" id="private-inquiry">
        <div>
          <p className="eyebrow">Confidential inquiry</p>
          <h2>Begin with your family’s educational context.</h2>
          <p>Share only what is useful at this stage. Dr. Jenn reviews each inquiry personally. If there is a potential fit, Taylor, Dr. Jenn’s assistant, will reply to arrange a private conversation.</p>
        </div>
        <AdvisoryInquiry />
      </section>

      <footer className="pea-footer">
        <Link className="brand brand-light" href="/"><Mark /><span>Bright Spiral<br />Literacy</span></Link>
        <span>Private Education Advisory</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </footer>
    </main>
  );
}
