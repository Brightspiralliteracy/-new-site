import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "The Bright Spiral Journal",
  description: "Clear, evidence-informed writing about how children learn to read, written for international school families.",
};

const articles = [
  { href: "/resources/what-makes-a-reader", tag: "Reading development", time: "12 min read", title: "What Makes a Reader?", deck: "A guide to reading development for international school parents, and a better question than “Is my child a reader?”", art: "A?", className: "art-a" },
  { href: "/resources/what-15-years-taught-me", tag: "From Dr. Jenn’s notebook", time: "7 min read", title: "What 15 Years in Education Made Me Care Less About", deck: "The polished performance is not always the useful evidence. Here is what I watch instead.", art: "15", className: "art-b" },
];

export default function Resources() {
  return (
    <>
      <Header />
      <main className="journal-index" id="main-content">
        <section className="journal-hero">
          <p className="eyebrow">The Bright Spiral Journal</p>
          <h1>Clear thinking for families raising readers.</h1>
          <p>No generic checklists. No panic. Just careful explanations of what reading asks children to do, what parents might notice, and which questions are worth asking next.</p>
        </section>
        <section className="journal-list">
          {articles.map((article, index) => (
            <article className="journal-card" key={article.href}>
              <Link className={`resource-art ${article.className}`} href={article.href}>{article.art}</Link>
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
