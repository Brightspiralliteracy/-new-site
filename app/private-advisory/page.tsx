"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Footer, Header } from "../page";

export default function PrivateAdvisory() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "private-advisory",
          name: data.get("name"),
          email: data.get("email"),
          inquiryType: data.get("support"),
          childAge: data.get("child"),
          message: data.get("why"),
          website: data.get("website"),
          details: {
            location: String(data.get("location") ?? ""),
            school: String(data.get("school") ?? ""),
            team: String(data.get("team") ?? ""),
            involvement: String(data.get("involvement") ?? ""),
            context: String(data.get("context") ?? ""),
          },
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error);
      form.reset();
      setStatus("sent");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="advisory-page" id="main-content">
        <section className="advisory-hero">
          <div>
            <p className="eyebrow light">The Bright Spiral Private Advisory</p>
            <h1>One trusted literacy advisor for your family.</h1>
            <p>For a limited number of international families, Dr. Jenn provides private, ongoing literacy guidance across home, school, tutors, specialists, and transitions.</p>
          </div>
          <aside><span>Limited availability</span><strong>Private proposal</strong><p>Each relationship is designed around the child, the school context, and the level of access your family requires.</p></aside>
        </section>

        <section className="advisory-role">
          <div><p className="eyebrow">High touch by design</p><h2>Your family does not need to coordinate every literacy decision alone.</h2></div>
          <div><p>School reports arrive. Teachers change. Tutors make recommendations. A move introduces a new curriculum. Your child’s needs shift.</p><p>Dr. Jenn keeps the full picture in view, interprets new information, and helps the adults around your child make aligned decisions.</p></div>
        </section>

        <section className="advisory-includes">
          <p className="eyebrow light">Designed around your family</p>
          <h2>Private access. Ongoing judgment. Coordinated decisions.</h2>
          <div>
            <article><span>01</span><h3>Interpret</h3><p>Reading data, school reports, assessments, and new concerns are reviewed in context.</p></article>
            <article><span>02</span><h3>Advise</h3><p>Your family receives direct guidance on instruction, providers, programs, and next steps.</p></article>
            <article><span>03</span><h3>Coordinate</h3><p>Dr. Jenn communicates with teachers, tutors, and specialists when alignment matters.</p></article>
            <article><span>04</span><h3>Stay close</h3><p>Priority access and regular reviews keep decisions responsive as needs change.</p></article>
          </div>
        </section>

        <section className="advisory-application">
          <div>
            <p className="eyebrow">Request private consideration</p>
            <h2>Tell Dr. Jenn what your family needs.</h2>
            <p>This application begins a private conversation. If the Advisory fits your family, Dr. Jenn will recommend a scope and prepare a private proposal.</p>
          </div>
          <form className="inquiry-form" onSubmit={submit}>
            <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <div className="form-row">
              <label>Parent or guardian name<input name="name" required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            </div>
            <div className="form-row">
              <label>Location and time zone<input name="location" required /></label>
              <label>Child’s age and school year<input name="child" required /></label>
            </div>
            <label>School, curricula, and languages<textarea name="school" required rows={3} /></label>
            <label>Who currently supports your child’s reading?<textarea name="team" required rows={3} /></label>
            <label>Which support are you seeking?
              <select name="support" required defaultValue="">
                <option value="" disabled>Choose the closest fit</option>
                <option>Ongoing literacy decision support</option>
                <option>School and specialist coordination</option>
                <option>Support through a school move or curriculum change</option>
                <option>Private instruction plus family advisory</option>
                <option>A complete, custom relationship</option>
              </select>
            </label>
            <label>Why are you seeking private advisory now?<textarea name="why" required rows={4} /></label>
            <label>How involved would you like Dr. Jenn to be?<textarea name="involvement" required rows={4} /></label>
            <label>Anything else Dr. Jenn should understand?<textarea name="context" rows={4} /></label>
            <label className="form-consent"><input type="checkbox" required /> I understand Private Advisory is limited and offered through a custom private proposal.</label>
            <p className="form-privacy">By applying, you agree to our <Link href="/privacy">Privacy Policy</Link>.</p>
            <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Submit private application"} <span>↗</span></button>
            <div aria-live="polite">
              {status === "sent" && <p className="form-status form-success">Thank you. Your application is safely recorded. Dr. Jenn will review it and reply by email.</p>}
              {status === "error" && <p className="form-status form-error">{error} You may also email <a href="mailto:jenn@brightspiralliteracy.com">jenn@brightspiralliteracy.com</a>.</p>}
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
