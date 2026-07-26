"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Footer, Header } from "../page";

export default function Contact() {
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
          kind: "contact",
          name: data.get("name"),
          email: data.get("email"),
          inquiryType: data.get("inquiryType"),
          childAge: data.get("childAge"),
          message: data.get("message"),
          marketingConsent: data.get("updates") === "on",
          website: data.get("website"),
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
      <main className="contact-page" id="main-content">
        <section className="contact-intro">
          <p className="eyebrow">Contact Bright Spiral</p>
          <h1>Start with what you have noticed.</h1>
          <p>You do not need to organize every report before reaching out. Tell us what brought you here, what you have tried, and what you want to understand.</p>
        </section>
        <section className="contact-layout">
          <form className="inquiry-form" id="contact-form" onSubmit={submit}>
            <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <div className="form-row">
              <label>Name<input name="name" required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            </div>
            <div className="form-row">
              <label>What are you reaching out about?
                <select name="inquiryType" required defaultValue="">
                  <option value="" disabled>Choose one</option>
                  <option>My child’s reading</option>
                  <option>Reading Instruction Blueprint</option>
                  <option>Reading Turnaround</option>
                  <option>Private Advisory</option>
                  <option>The Parent Reading Room</option>
                  <option>A brand partnership</option>
                  <option>Speaking or media</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>Child’s age, if relevant<input name="childAge" inputMode="numeric" /></label>
            </div>
            <label>What would you like Dr. Jenn to know?<textarea name="message" required rows={7} /></label>
            <label className="form-consent"><input type="checkbox" name="updates" /> I would like occasional literacy guidance from Bright Spiral Literacy.</label>
            <p className="form-privacy">By sending this form, you agree to our <Link href="/privacy">Privacy Policy</Link>. Email guidance is optional and requires the checkbox above.</p>
            <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send your inquiry"} <span>↗</span></button>
            <div aria-live="polite">
              {status === "sent" && <p className="form-status form-success">Thank you. Your inquiry is safely recorded. Dr. Jenn will reply by email.</p>}
              {status === "error" && <p className="form-status form-error">{error} You may also email <a href="mailto:jenn@brightspiralliteracy.com">jenn@brightspiralliteracy.com</a>.</p>}
            </div>
          </form>
          <aside className="partnership-card">
            <p className="eyebrow light">Brand partnerships</p>
            <h2>Have a tool international school families should know about?</h2>
            <p>Bright Spiral partners with brands whose books, tools, and services make reading, writing, or international family life better.</p>
            <p>Tell us what you offer, who it serves, and why it belongs in this community. Dr. Jenn reviews every partnership for relevance and fit before sharing it with families.</p>
            <a className="text-link" href="#contact-form">Propose a partnership <span>→</span></a>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
