import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;
const NEXT_STEP = "/start-here";
const STAN_STORE = "https://stan.store/brightspiralliteracy";
const CLARITY_CALL = "https://stan.store/brightspiralliteracy/p/reading-clarity-call";

const Mark = () => (
  <span className="mark" aria-hidden="true">
    <i />
    <i />
    <i />
  </span>
);

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="announcement">
        <span>Literacy support for international school families</span>
        <Link href={NEXT_STEP}>Explore support <Arrow /></Link>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Bright Spiral Literacy home">
          <Mark />
          <span>Bright Spiral<br />Literacy</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/start-here">Start here</Link>
          <Link href="/services">Work with Dr. Jenn</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
        </nav>
        <Link className="button button-small desktop-cta" href={NEXT_STEP}>Explore support</Link>
        <details className="mobile-menu">
          <summary><span>Menu</span><b aria-hidden="true">+</b></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/start-here">Start here</Link>
            <Link href="/services">Work with Dr. Jenn</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
          </nav>
        </details>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Link className="brand brand-light" href="/"><Mark /><span>Bright Spiral<br />Literacy</span></Link>
          <p>Literacy support designed for international school families.</p>
        </div>
        <div className="footer-links">
          <div><b>Explore</b><Link href="/start-here">Start here</Link><Link href="/services">Ways to work together</Link><Link href="/reading-clarity-blueprint">Reading Clarity Blueprint</Link><Link href="/reading-turnaround">Reading Turnaround</Link><Link href={STAN_STORE}>Parent Reading Room</Link><Link href="/private-advisory">Private Advisory</Link></div>
          <div><b>Company</b><Link href="/about">About Dr. Jenn</Link><Link href="/standard">Our Standard</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Bright Spiral Literacy</span><span className="legal-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookie settings</Link></span></div>
    </footer>
  );
}

export function ExperienceStats() {
  return (
    <section className="experience-stats" aria-labelledby="experience-heading">
      <div className="experience-intro">
        <p className="eyebrow light">Experience in practice</p>
        <h2 id="experience-heading">Built through years of teaching, leading, and preparing teachers.</h2>
        <p>Nine years teaching students. Six years leading instructional improvement. Nine years teaching pre-service educators at university.</p>
      </div>
      <div className="experience-grid">
        <article><strong>1,250+</strong><span>hours of direct reading instruction</span></article>
        <article><strong>700+</strong><span>teachers supported through coaching, leadership, and professional learning</span></article>
        <article><strong>450</strong><span>estimated planning, coaching, and leadership meetings</span></article>
        <article><strong>2,400+</strong><span>pre-service-teacher enrollments taught across 99 university classes</span></article>
      </div>
      <p className="experience-note">Conservative estimates based on Jenn’s teaching schedules, documented roles, school scope, and university course record.</p>
    </section>
  );
}

const Questions = () => (
  <section className="questions">
    <div className="eyebrow light">Does any of this sound familiar?</div>
    <div className="question-grid">
      <blockquote>“My child reads the words. Why don’t they understand the story?”</blockquote>
      <blockquote>“The school says to wait. Should I?”</blockquote>
      <blockquote>“Is this a reading difficulty, a language difference, or both?”</blockquote>
      <blockquote>“Why isn’t tutoring changing anything?”</blockquote>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Literacy expertise for international school families</p>
            <h1>Your child’s reading struggles have an <em>explanation.</em></h1>
            <p className="hero-lede">When “just keep practicing” is not changing anything, we look closer. You leave knowing how your child reads, where the difficulty begins, and which step matters now.</p>
            <div className="actions">
              <Link className="button" href={NEXT_STEP}>Choose your next step <Arrow /></Link>
              <Link className="text-link" href="/services">Find the right level of support <span>→</span></Link>
            </div>
            <div className="hero-proof">
              <span>15+ years in education</span>
              <span>International school teacher and leader experience</span>
              <span>Evidence-informed</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="portrait-placeholder">
              <img src="/images/dr-jenn-hero.webp" alt="Dr. Jenn Overstreet, founder of Bright Spiral Literacy" />
              <div className="portrait-label">Dr. Jenn<br /><span>Founder & literacy specialist</span></div>
            </div>
            <div className="book book-one"><span>CONTEXT</span></div>
            <div className="book book-two"><span>CLARITY</span></div>
            <div className="sun-note">Science guides us.<br /><b>Children lead us.</b></div>
          </div>
        </section>

        <Questions />

        <section className="authority-bridge">
          <div>
            <p className="eyebrow">Why families trust Dr. Jenn</p>
            <h2>Too many families are left trying to connect the dots.</h2>
          </div>
          <div>
            <p className="founder-credentials">PhD · M.S. in Educational Leadership · 15+ years in education</p>
            <p>Between assessments, school feedback, and what their child needs, parents are often handed pieces instead of a clear picture. Bright Spiral exists to bring those pieces together through expert interpretation grounded in real classrooms.</p>
            <Link className="text-link" href="/about">Meet Dr. Jenn <span>→</span></Link>
          </div>
        </section>

        <ExperienceStats />

        <section className="clarity-feature">
          <div className="clarity-card">
            <div className="card-top"><span>01</span><span>Flagship experience</span></div>
            <h2>Reading Clarity Blueprint</h2>
            <p>A complete instructional decision process for families who need to know how their child reads and what should happen next.</p>
            <div className="price">€1,200 <small>one-time investment</small></div>
            <Link className="button button-yellow" href="/reading-clarity-blueprint">Explore the Blueprint <Arrow /></Link>
          </div>
          <div className="clarity-copy">
            <p className="eyebrow">From uncertainty to a clear plan</p>
            <h2>A reading level will not tell you what to teach next. The Blueprint will.</h2>
            <p>Dr. Jenn brings the evidence, the reading itself, and your child’s educational and language history into one coherent instructional picture.</p>
            <ul className="check-list">
              <li>Two individual assessment sessions</li>
              <li>A parent-friendly Reading Profile</li>
              <li>A Personalized Eight-Week Reading Support Plan</li>
              <li>A consultation with Dr. Jenn</li>
              <li>Priorities organized by first, next, and later</li>
              <li>A one-page teacher summary</li>
            </ul>
          </div>
        </section>

        <section className="method">
          <div className="method-intro">
            <p className="eyebrow light">The Bright Spiral Method</p>
            <h2>Stop asking your child to work harder at the wrong thing.</h2>
            <p>Reading Turnaround replaces repeated practice and crossed fingers with a focused plan. Every lesson has a reason. Every change gives us evidence about what your child needs next.</p>
          </div>
          <div className="method-steps">
            <article><b>Find the friction</b><p>Identify the exact point where reading breaks down.</p></article>
            <article><b>Teach what is missing</b><p>Replace broad practice with explicit instruction in the skills your child needs.</p></article>
            <article><b>Measure the change</b><p>Watch whether the new learning appears in words, books, and schoolwork.</p></article>
            <article><b>Make reading theirs</b><p>Move toward greater independence, less avoidance, and a child who trusts their own reading.</p></article>
          </div>
        </section>

        <section className="international">
          <div className="context-visual">
            <img className="context-main-photo" src="/images/dr-jenn-teaching.webp" alt="Dr. Jenn teaching elementary students in an international school classroom" />
            <img className="context-detail-photo" src="/images/student-writing.webp" alt="A child sharing letter and sound work during a literacy lesson" />
            <p>One child. More than one source of evidence.</p>
          </div>
          <div>
            <p className="eyebrow">International by design</p>
            <h2>Your child’s context is not a footnote.</h2>
            <p>Internationally educated families deserve literacy guidance that is as personalized and globally minded as their children’s lives.</p>
            <p>Languages, previous instruction, changing curricula, school transitions, and confidence all shape how a child becomes a reader.</p>
            <p>We never ask only, “How is this child reading?” We also ask, “How did this child become the reader they are today?”</p>
            <Link className="text-link" href="/standard">Read the Bright Spiral Standard <span>→</span></Link>
          </div>
        </section>

        <section className="founder">
          <div className="founder-photo">
            <img src="/images/dr-jenn-workshop.webp" alt="Dr. Jenn working with educators during a professional learning session" />
            <span>Teacher. Leader. Literacy specialist.</span>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Meet Dr. Jenn</p>
            <h2>The best literacy decisions begin with close attention to the child and the evidence.</h2>
            <p className="founder-credentials">PhD · M.S. in Educational Leadership · 15+ years in education</p>
            <p>Dr. Jennifer Overstreet brings international school teacher and leader experience across classroom teaching, school leadership, instructional coaching, and university teaching in the United States, Italy, and the Middle East.</p>
            <p>She returned to the classroom because literacy ideas should remain connected to real children and how they learn.</p>
            <Link className="text-link" href="/about">More about Dr. Jenn <span>→</span></Link>
          </div>
        </section>

        <section className="proof">
          <div className="proof-heading">
            <p className="eyebrow light">What families and schools say</p>
            <h2>Progress you can see. Support children want to return to.</h2>
          </div>
          <div className="featured-quote">
            <div className="quote-mark">“</div>
            <blockquote>I’m amazed at the growth Valentina has had in 2 weeks with you.</blockquote>
            <p>Rebecca, parent</p>
          </div>
          <div className="proof-grid">
            <blockquote>
              <p>“You are magic when it comes to teaching reading!”</p>
              <cite>Grade 1 grandfather</cite>
            </blockquote>
            <blockquote>
              <p>“He has had so much fun during his lessons and said that he cannot wait for his lesson tomorrow.”</p>
              <cite>Parent of an elementary student</cite>
            </blockquote>
            <blockquote>
              <p>“I am reading Wonder at home and a book about Egypt at school. I like reading. It takes me to a new world.”</p>
              <cite>Grade 5 student</cite>
            </blockquote>
            <blockquote>
              <p>“My child has gone from being a resistant reader, to reading a book a day, to reading any chance she gets.”</p>
              <cite>Parent</cite>
            </blockquote>
            <blockquote>
              <p>“Since working with Jenn, his confidence is 10X.”</p>
              <cite>Parent</cite>
            </blockquote>
          </div>
          <div className="proof-story">
            <div className="proof-story-copy">
              <span>An anonymized family story</span>
              <h3>From avoiding books to choosing chapter books.</h3>
              <dl className="case-study-details">
                <div><dt>Starting point</dt><dd>A Grade 1 student was reversing letters, avoiding books, and had not chosen to read independently in two years.</dd></div>
                <div><dt>Bright Spiral’s focus</dt><dd>Look closely at the reading, identify the missing skills, and replace broad practice with targeted instruction.</dd></div>
                <div><dt>What changed</dt><dd>By spring break, she was choosing chapter books on her own.</dd></div>
              </dl>
              <small>Individual outcomes differ. Details are limited to protect the child’s privacy.</small>
            </div>
            <div className="proof-images">
              <img src="/images/student-writing.webp" alt="A child showing letter and sound work on a whiteboard" />
              <img src="/images/reading-session-work.webp" alt="Student word-reading game from an online literacy session" />
            </div>
          </div>
        </section>

        <section className="paths">
          <div className="section-intro">
            <p className="eyebrow">Choose the question closest to yours</p>
            <h2>Where do you need support?</h2>
          </div>
          <div className="path-grid">
            <article className="path-blue"><span>01</span><h3>I have questions and want trusted guidance.</h3><p>Learn what matters, ask better questions, and get support between school meetings.</p><Link href={STAN_STORE}>The Parent Reading Room <Arrow /></Link></article>
            <article className="path-yellow"><span>02</span><h3>I need to know what my child needs.</h3><p>Understand how your child reads and which instruction belongs first, next, and later.</p><Link href="/reading-clarity-blueprint">Reading Clarity Blueprint <Arrow /></Link></article>
            <article className="path-cream"><span>03</span><h3>I want Dr. Jenn to teach my child.</h3><p>Move from understanding the problem to focused teaching and measurable progress.</p><Link href="/reading-turnaround">Reading Turnaround <Arrow /></Link></article>
          </div>
        </section>

        <section className="standard-callout">
          <p className="eyebrow">The promise behind our work</p>
          <h2>A child who becomes a confident reader gains choices.</h2>
          <p>Literacy protects possibility. That is the standard behind every decision we make.</p>
          <Link className="button button-dark" href="/standard">Read our Standard <Arrow /></Link>
        </section>

        <section className="final-cta">
          <div><p className="eyebrow light">Your next step</p><h2>You do not need another opinion.<br />You need a clear path forward.</h2><p>Helping internationally educated children become confident, capable readers by giving parents the clarity and expertise to support them.</p></div>
          <Link className="button button-yellow" href={CLARITY_CALL}>Book a Reading Clarity Call <Arrow /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
