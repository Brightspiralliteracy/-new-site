import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "Work With Dr. Jenn",
  description: "Parent guidance, a personalized Reading Instruction Blueprint, or direct specialist teaching.",
};

const NEXT_STEP = "https://stan.store/brightspiralliteracy";
const ROOM = "https://stan.store/brightspiralliteracy";

export default function Services() {
  return (
    <>
      <Header />
      <main className="services-page" id="main-content">
        <section className="services-hero">
          <p className="eyebrow light">Work with Dr. Jenn</p>
          <h1>Start with the support your family needs now.</h1>
          <p>You do not need to choose between a long list of packages. Decide whether you need parent guidance, a personalized instructional plan, or direct teaching for your child.</p>
        </section>

        <section className="simple-offers">
          <article className="offer-room">
            <span>01</span>
            <p className="eyebrow">Learn and ask</p>
            <h2>The Parent Reading Room</h2>
            <p className="parent-thought">“I have questions and want trusted guidance.”</p>
            <p>A membership for international school parents who want practical literacy guidance, live support, and a place to ask questions.</p>
            <div className="offer-price">$39 <small>per month</small></div>
            <Link className="button" href={ROOM}>Explore the Room <span>↗</span></Link>
          </article>

          <article className="offer-blueprint">
            <span>02</span>
            <p className="eyebrow light">Understand and prioritize</p>
            <h2>Reading Instruction Blueprint</h2>
            <p className="parent-thought">“I need to know what my child needs.”</p>
            <p>Dr. Jenn works directly with your child, interprets the evidence, and identifies what should be taught first, next, and later.</p>
            <div className="offer-price">€1,200 <small>one-time investment</small></div>
            <Link className="button button-yellow" href="/reading-instruction-blueprint">Explore the Blueprint <span>→</span></Link>
          </article>

          <article className="offer-turnaround">
            <span>03</span>
            <p className="eyebrow">Teach and measure</p>
            <h2>Reading Turnaround</h2>
            <p className="parent-thought">“I want Dr. Jenn to help change my child’s reading.”</p>
            <p>Dr. Jenn provides focused private instruction, monitors your child’s response, and adjusts the teaching as progress develops.</p>
            <div className="offer-price">From €2,200 <small>separate investment after the €1,200 Blueprint</small></div>
            <Link className="button" href="/reading-turnaround">Explore Reading Turnaround <span>→</span></Link>
          </article>
        </section>

        <section className="advisory-invitation">
          <div>
            <p className="eyebrow light">For a limited number of families</p>
            <h2>The Bright Spiral Private Advisory</h2>
          </div>
          <div>
            <p>For families seeking a trusted literacy advisor across home, school, specialists, and international transitions. Each relationship is private and designed around the family.</p>
            <Link className="button button-yellow" href="/private-advisory">Request private consideration <span>→</span></Link>
          </div>
        </section>

        <section className="services-final">
          <p className="eyebrow">Still unsure?</p>
          <h2>Start with a short conversation.</h2>
          <p>Tell Dr. Jenn what you are seeing. She will help you identify which level of support fits your family.</p>
          <Link className="button" href={NEXT_STEP}>Choose your next step <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
