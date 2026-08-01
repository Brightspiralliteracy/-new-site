import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceStats, Footer, Header } from "../page";

const NEXT_STEP = "/start-here";
const STAN_STORE = "https://stan.store/brightspiralliteracy";

type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  color: string;
  sections: { title: string; body: string; items?: string[] }[];
  cta: string;
};

const pages: Record<string, PageData> = {
  "start-here": {
    eyebrow: "Start here",
    title: "What kind of support does your family need?",
    intro: "You do not need to understand every literacy term before taking the next step. Start with the question closest to yours.",
    color: "yellow",
    sections: [
      { title: "“I need to understand why reading feels hard.”", body: "The Reading Clarity Blueprint brings together evidence, context, and professional interpretation. You leave with a parent-friendly Reading Profile and a Personalized Eight-Week Reading Support Plan.", items: ["Best first step when progress has stalled", "Designed for international and multilingual families", "Investment: €1,200"] },
      { title: "“We already know what needs teaching.”", body: "Reading Turnaround puts the Blueprint into practice through individualized specialist instruction.", items: ["Custom engagement from €2,200 to €4,800", "Focused on the skills which matter now", "Progress you understand and track"] },
      { title: "“I want guidance before assessment.”", body: "The Parent Reading Room gives international school parents a trusted place to learn, ask questions, and make more confident literacy decisions.", items: ["Live Q&A and short trainings", "Practical home support", "$39 per month"] },
    ],
    cta: "Explore the Blueprint",
  },
  "reading-turnaround": {
    eyebrow: "Reading Turnaround",
    title: "A roadmap is useful when it changes what happens next.",
    intro: "Reading Turnaround implements your child’s Reading Clarity Blueprint through private specialist instruction.",
    color: "dark",
    sections: [
      { title: "The Blueprint determines the path", body: "Families do not shop between generic intervention packages. Dr. Jenn recommends the scope, sequence, frequency, and duration from your child’s Reading Clarity Blueprint.", items: ["Separate custom engagement from €2,200 to €4,800", "€1,200 Reading Clarity Blueprint required first", "Clear goals and progress indicators"] },
      { title: "Find the friction", body: "Identify the point where accurate, confident reading begins to break down." },
      { title: "Teach what is missing", body: "Target the highest-priority skill in a deliberate instructional sequence." },
      { title: "Measure the change", body: "Look for new learning in unfamiliar words, books, and schoolwork." },
      { title: "Make reading theirs", body: "Move toward stronger skill, growing independence, and a child who trusts their own reading." },
    ],
    cta: "Start with the Blueprint",
  },
  "parent-reading-room": {
    eyebrow: "The Parent Reading Room",
    title: "Become the parent who knows what to do next.",
    intro: "A $39-per-month membership where international school parents learn what matters, ask better questions, and make more confident literacy decisions.",
    color: "yellow",
    sections: [
      { title: "Your first 30 days have a clear purpose", body: "Understand what matters most in your child’s reading, know what to ask the school, and leave with one useful action for home. You do not need to become the tutor. You need enough understanding to make sound decisions." },
      { title: "What your membership includes", body: "The Room gives you practical guidance for the reading questions international school families face.", items: ["One live group office hour each month", "Short parent trainings and a focused resource library", "School-conversation frameworks", "Multilingual reading guidance", "Home-practice ideas which do not turn home into another classroom", "Book and learning-tool recommendations", "Weekly discussion prompts and a weekly wins thread", "Peer discussion with international school parents"] },
      { title: "Bring the questions which appear between school meetings", body: "Ask about reading development, assessment results, intervention, multilingualism, school transitions, or when to push for more support. Dr. Jenn responds to community questions within two working days." },
      { title: "What the Room does not include", body: "The Parent Reading Room provides general education and group guidance. It does not include an individual diagnosis, full assessment interpretation, a personalized intervention plan, private-message consultation, or tutoring. Families needing an individual instructional review begin with the Reading Clarity Blueprint." },
      { title: "$39 per month. One clear level of support.", body: "There are no course tiers or content requirements. Join for ongoing guidance, use the live and written support you need, and return to the library when a new question appears." },
    ],
    cta: "Join The Parent Reading Room",
  },
  about: {
    eyebrow: "About Dr. Jenn",
    title: "I have spent more than 15 years paying attention to how children learn.",
    intro: "Children deserve literacy instruction grounded in evidence, and parents deserve the clarity to know whether they are receiving it.",
    color: "blue",
    sections: [
      { title: "From classrooms to leadership, and back again", body: "Dr. Jenn brings more than 15 years of international school teacher and leader experience across classroom teaching, instructional coaching, school leadership, university teaching, assessment, and international education. She holds a Master of Science in Educational Leadership. She returned to the classroom because the best literacy thinking stays close to real children." },
      { title: "Why Bright Spiral exists", body: "Across countries and school systems, families kept asking the same questions. Why is reading hard for my child? Should we wait? What kind of help will make a difference? Bright Spiral was built to give internationally educated families guidance that is as personalized and globally minded as their children’s lives." },
      { title: "Expertise without distance", body: "Parents deserve plain language, honest interpretation, and practical next steps. They should leave a conversation feeling more capable, not more confused." },
      { title: "What confident reading makes possible", body: "Every confident reader gains more than a school skill. They gain access to ideas, opportunities, and the ability to think independently." },
    ],
    cta: "Read the Bright Spiral Standard",
  },
  standard: {
    eyebrow: "The Bright Spiral Standard",
    title: "Every decision should protect possibility.",
    intro: "The Standard guides every assessment, recommendation, lesson, report, product, partnership, and conversation.",
    color: "dark",
    sections: [
      { title: "Literacy protects possibility", body: "Reading gives children access to learning, independence, communication, and opportunity. Our work should expand those possibilities." },
      { title: "Science guides us. Children lead us.", body: "Research informs our decisions. Assessment strengthens our understanding. Professional judgment helps us apply both without losing sight of the child." },
      { title: "Context creates clarity", body: "Language, instruction, mobility, culture, confidence, and opportunity all shape a child’s reading story. We seek understanding before judgment." },
      { title: "Assessment creates understanding", body: "Every assessment should explain what is working, what is getting in the way, and what should happen next." },
      { title: "Clarity creates action", body: "A recommendation should be practical, personalized, and connected to the child in front of us." },
      { title: "Partnership creates progress", body: "Parents know their child. Teachers know the classroom. Specialists contribute targeted expertise. Children benefit when those perspectives move in the same direction." },
    ],
    cta: "Find your next step",
  },
  resources: {
    eyebrow: "The Bright Spiral Journal",
    title: "Clear thinking for families raising readers.",
    intro: "Research-informed ideas about reading, writing, multilingual learning, assessment, and supporting literacy at home.",
    color: "yellow",
    sections: [
      { title: "Why reading difficulties have explanations", body: "A child who avoids reading is communicating something. The useful question is not how to make them comply. It is where the effort begins to outweigh the reward." },
      { title: "Is it a language difference or a reading difficulty?", body: "For multilingual children, the answer requires more than one score. Language history, instruction, patterns across languages, and opportunities to learn all matter." },
      { title: "What to do when tutoring is not improving reading", body: "More practice will not solve an unidentified problem. Before adding hours, ask what skill is being taught, why it was selected, and how progress will be measured." },
      { title: "What protecting possibility means", body: "Literacy matters beyond school performance. Reading gives children more ways to learn, question, communicate, and participate in the world." },
    ],
    cta: "Explore the Blueprint",
  },
  contact: {
    eyebrow: "Contact Bright Spiral",
    title: "Tell us what is happening with reading.",
    intro: "Share the question which brought you here. We will point you toward the most appropriate next step.",
    color: "blue",
    sections: [
      { title: "For family questions", body: "Email hello@brightspiralliteracy.com with your child’s age, school context, and the reading concern you want to understand." },
      { title: "For brand partnerships", body: "Have a book, tool, or service that would benefit international school families? Tell us who it serves, what problem it solves, and why it fits the Bright Spiral community." },
      { title: "A useful first message", body: "You do not need to send every report immediately. Start with what you have noticed, what the school has shared, and what you have already tried." },
    ],
    cta: "Email Dr. Jenn",
  },
  faq: {
    eyebrow: "Common questions",
    title: "A clearer answer starts here.",
    intro: "Straight answers about assessment, multilingual learners, online sessions, and what happens next.",
    color: "yellow",
    sections: [
      { title: "Does the Reading Clarity Blueprint provide a diagnosis?", body: "No. It is an instructional decision process. It explains reading strengths, learning gaps, and recommended next steps." },
      { title: "Is this appropriate for multilingual children?", body: "Yes. Language and educational history form part of the assessment context from the beginning." },
      { title: "How do online assessment sessions work?", body: "Your child meets individually with Dr. Jenn for two 45-minute sessions. You receive preparation guidance before the first meeting." },
      { title: "Do we need the Blueprint before Reading Turnaround?", body: "Yes. The Blueprint determines the most appropriate intervention scope and priorities." },
      { title: "Does the Parent Reading Room replace individual support?", body: "No. It provides parent education and community. Individual concerns requiring personalized review begin with the Reading Clarity Blueprint." },
    ],
    cta: "Book the Blueprint",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.eyebrow, description: page.intro } : {};
}

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug] ?? pages["start-here"];
  const target = page.cta.includes("Parent")
    ? STAN_STORE
    : page.cta.includes("Standard")
      ? "/standard"
      : page.cta.includes("Email")
        ? "mailto:hello@brightspiralliteracy.com"
        : NEXT_STEP;
  return (
    <>
      <Header />
      <main className={`inner-page theme-${page.color}`} id="main-content">
        <section className="inner-hero">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <Link className="button" href={target}>{page.cta} <span>↗</span></Link>
        </section>
        {slug === "about" && (
          <>
            <section className="about-visuals" aria-label="Dr. Jenn at work">
              <figure className="about-leadership-photo">
                <img src="/images/dr-jenn-presentation.webp" alt="Dr. Jenn leading a professional learning session for educators" />
                <figcaption>International school teacher and leader experience</figcaption>
              </figure>
              <div className="about-video-placeholder">
                <img src="/images/dr-jenn-classroom-blue.webp" alt="Dr. Jenn in her international school classroom" />
                <div>
                  <span>A note from Dr. Jenn</span>
                  <h2>Meet the founder behind Bright Spiral Literacy.</h2>
                  <p>Jenn’s welcome video will be added here soon.</p>
                </div>
              </div>
            </section>
            <ExperienceStats />
          </>
        )}
        <section className="inner-content">
          {page.sections.map((section, i) => (
            <article key={section.title}>
              <span className="section-number">{String(i + 1).padStart(2, "0")}</span>
              <div><h2>{section.title}</h2><p>{section.body}</p>{section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}</div>
            </article>
          ))}
        </section>
        <section className="inner-final">
          <h2>Clarity changes what happens next.</h2>
          <Link className="button button-yellow" href={target}>{page.cta} <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
