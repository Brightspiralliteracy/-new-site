import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bright Spiral Literacy collects, uses, and protects personal information.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="legal-page" id="main-content">
        <header><p className="eyebrow">Last updated 26 July 2026</p><h1>Privacy Policy</h1><p>Bright Spiral Literacy respects your family’s privacy. This policy explains what we collect through this website and why.</p></header>
        <article>
          <h2>Who is responsible for your information</h2>
          <p>Bright Spiral Literacy, operated by Dr. Jennifer Overstreet in Rome, Italy, is the data controller for information submitted through this website. Contact: <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>.</p>

          <h2>Information we collect</h2>
          <p>Inquiry and application forms collect the information you choose to provide, including your name, email, your child’s age or school year, school context, languages, reading concerns, and support requested.</p>
          <p>Please do not send medical records, formal assessment files, identity documents, or other sensitive documents through a general website form. Bright Spiral provides a separate process when records are required.</p>

          <h2>How we use it</h2>
          <ul>
            <li>Respond to your inquiry or application.</li>
            <li>Decide which Bright Spiral service fits your request.</li>
            <li>Maintain an accurate record of communication.</li>
            <li>Send literacy guidance only when you give separate marketing consent.</li>
            <li>Protect the website from spam and misuse.</li>
          </ul>

          <h2>Legal basis</h2>
          <p>We process inquiries to take steps requested before a possible service agreement and for our legitimate interest in responding to families. We rely on consent for optional marketing email.</p>

          <h2>Service providers</h2>
          <p>The website and form records use OpenAI Sites and Cloudflare infrastructure. Optional email subscriptions use MailerLite once the connection is active. Booking links open Paperbell. Parent Reading Room links open Stan Store. Google supplies the site fonts. Each provider processes information under its own privacy terms.</p>

          <h2>Retention</h2>
          <p>We keep inquiries only as long as needed to respond, maintain business records, meet legal obligations, and resolve disputes. You may request deletion when no legal reason requires continued retention.</p>

          <h2>International processing</h2>
          <p>Some service providers process data outside Italy or the European Economic Area. We select established providers and rely on their published safeguards and contractual transfer mechanisms.</p>

          <h2>Your rights</h2>
          <p>Depending on applicable law, you may request access, correction, deletion, restriction, portability, or objection. You may withdraw marketing consent at any time. Email <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>. You also have the right to contact your local data protection authority.</p>

          <h2>Children’s information</h2>
          <p>Parents and guardians submit website inquiries. Children should not submit forms directly. Bright Spiral collects child-related information only to understand a parent’s request and deliver agreed services.</p>

          <h2>Cookies and analytics</h2>
          <p>The current website does not run advertising pixels or behavioral analytics. Read the <Link href="/cookies">Cookie and Storage Policy</Link> for current details.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
