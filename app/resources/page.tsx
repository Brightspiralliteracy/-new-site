import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "The Bright Spiral Journal",
  description: "Clear, evidence-informed writing about how children learn to read, written for international school families.",
};

const articles = [
  { href: "/resources/what-makes-a-reader", tag: "Reading development", time: "12 min read", title: "What Makes a Reader?", deck: "A guide to reading development for international school parents, and a better question than “Is my child a reader?”", image: "/images/dr-jenn-presentation.webp", alt: "Dr. Jenn presenting student learning during a professional education session", label: "Reading, closely observed" },
  { href: "/resources/what-15-years-taught-me", tag: "From Dr. Jenn’s notebook", time: "7 min read", title: "What 15 Years in Education Made Me Care Less About", deck: "The polished performance is not always the useful evidence. Here is what I watch instead.", image: "/images/dr-jenn-workshop.webp", alt: "Dr. Jenn in conversation with educators during a workshop", label: "Lessons from the classroom" },
  { href: "/resources/what-makes-a-reader#everything-after-just", tag: "For parents", time: "3 min read", title: "Everything After “They Can Read, They Just…” Matters", deck: "The words after “just” often point toward the part of reading a child has not yet made secure.", image: "/images/dr-jenn-classroom-denim.webp", alt: "Dr. Jenn in an elementary classroom surrounded by student work", label: "What parents notice" },
];

export default function Resources() {
  return (
    <>
      <Header />
      <main className="journal-index" id="main-content">
        <section className="journal-hero">
          <p className="eyebrow">The Bright Spiral Journal</p>
          <h1>Clear thinking for families raising readers.</h1>
          <p>Careful explanations of what reading asks children to do, what parents might notice, and which questions are worth asking next.</p>
        </section>
        <section className="journal-list">
          {articles.map((article, index) => (
            <article className="journal-card" key={article.href}>
              <Link className="journal-image" href={article.href}>
                <img src={article.image} alt={article.alt} />
                <span>{article.label}</span>
              </Link>
              <div>
                <p className="journal-meta">{article.tag}<span>{article.time}</span></p>
                <h2><Link href={article.href}>{article.title}</Link></h2>
                <p>{article.deck}</p>
                <Link className="text-link" href={article.href}>Read article <span>→</span></Link>
              </div>
              <span className="journal-number">{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </section>
        <section className="journal-note">
          <p className="eyebrow">A note from Dr. Jenn</p>
          <h2>“The more years I spend doing this work, the less interested I am in the label of reader by itself. I want to know what we mean.”</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
