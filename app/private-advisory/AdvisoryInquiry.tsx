"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function AdvisoryInquiry() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const context = String(data.get("context") ?? "");
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "private-education-advisory",
          name: data.get("name"),
          email: data.get("email"),
          inquiryType: "Confidential Private Education Advisory inquiry",
          childAge: data.get("children"),
          message: context,
          website: data.get("website"),
          details: {
            role: String(data.get("role") ?? ""),
            children: String(data.get("children") ?? ""),
            timing: String(data.get("timing") ?? ""),
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
    <form className="inquiry-form pea-inquiry-form" onSubmit={submit}>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-row">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <label>Your relationship to the family
        <select name="role" required defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Parent or guardian</option>
          <option>Family office or representative</option>
          <option>Recruiter or placement advisor</option>
          <option>Private educator</option>
          <option>Other</option>
        </select>
      </label>
      <label>Children’s ages and current educational arrangement<input name="children" required /></label>
      <label>What would you like the family’s education to make possible?<textarea name="context" required rows={6} /></label>
      <label>Ideal timing <input name="timing" placeholder="For example: before September, this academic year, exploratory" /></label>
      <p className="form-privacy">Your information is treated as confidential and used only to respond to this inquiry. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      <button className="button button-yellow" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request a confidential conversation"} <span>↗</span></button>
      <div aria-live="polite">
        {status === "sent" && <p className="form-status form-success">Thank you. Taylor, Dr. Jenn’s assistant, will reply if there may be a fit.</p>}
        {status === "error" && <p className="form-status form-error">{error} You may also email <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>.</p>}
      </div>
    </form>
  );
}
