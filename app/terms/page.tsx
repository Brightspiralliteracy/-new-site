import type { Metadata } from "next";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Terms for using the Bright Spiral Literacy website and resources.",
};

export default function Terms() {
  return (
    <>
      <Header />
      <main className="legal-page" id="main-content">
        <header><p className="eyebrow">Last updated 26 July 2026</p><h1>Website Terms</h1><p>These terms apply when you use the Bright Spiral Literacy website, articles, forms, and free resources.</p></header>
        <article>
          <h2>Educational information</h2>
          <p>Website content provides general literacy education. It does not diagnose a learning, medical, psychological, or developmental condition. It does not replace individualized advice from a qualified professional who has reviewed your child’s full situation.</p>

          <h2>Services and payment</h2>
          <p>Website descriptions explain Bright Spiral services at a general level. A booking, proposal, invoice, or service agreement confirms the current scope, price, scheduling, cancellation terms, and deliverables. Those specific terms control if they differ from a website summary.</p>

          <h2>No promised outcome</h2>
          <p>Testimonials and family stories describe individual experiences. Reading progress depends on the child, attendance, instructional needs, practice, school context, and other factors. Bright Spiral does not promise a particular result or timeline.</p>

          <h2>Intellectual property</h2>
          <p>Bright Spiral Literacy owns or licenses the website copy, graphics, articles, frameworks, reports, and downloadable materials. You may use parent resources for your own family. You may not resell, republish, train a commercial system on, or distribute them without written permission.</p>

          <h2>Acceptable use</h2>
          <p>Do not misuse forms, attempt unauthorized access, interfere with website operation, scrape personal information, or submit content which is unlawful or infringes another person’s rights.</p>

          <h2>External services</h2>
          <p>Paperbell, Stan Store, MailerLite, and other linked services operate under their own terms. Bright Spiral does not control their websites or payment systems.</p>

          <h2>Liability</h2>
          <p>To the extent permitted by law, Bright Spiral is not liable for indirect losses arising from use of general website content or an external website. Nothing in these terms limits rights which cannot legally be limited.</p>

          <h2>Governing law</h2>
          <p>Italian law governs these website terms, subject to mandatory consumer protections which apply in your country of residence.</p>

          <h2>Questions</h2>
          <p>Email <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
