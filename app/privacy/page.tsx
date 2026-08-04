import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bright Spiral Literacy collects, uses, stores, and protects personal information.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="legal-page" id="main-content">
        <header>
          <p className="eyebrow">Last updated 4 August 2026</p>
          <h1>Privacy Policy</h1>
          <p>We ask for information so we can understand your family, provide the service you choose, and communicate clearly. This policy explains what we collect and what happens to it.</p>
        </header>
        <article>
          <h2>Who is responsible for your information</h2>
          <p>Bright Spiral Literacy is operated by two Italian sole traders from Via dei Banchi Nuovi 11, 00186 Rome, Italy.</p>
          <ul>
            <li><strong>Jennifer Lynn Overstreet, Partita IVA 18182311003</strong>, is responsible for information connected with the Reading Clarity Blueprint, Reading Turnaround, Stan Store purchases, and her direct client services.</li>
            <li><strong>James Louis Andrew Overstreet, Partita IVA 18179031002</strong>, is responsible for information connected with The Parent Reading Room and its Skool membership.</li>
          </ul>
          <p>Jennifer and James share responsibility for information collected through the Bright Spiral Literacy website, general inquiries, and shared mailing activity. Questions or privacy requests may be sent to <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>.</p>

          <h2>Information we collect</h2>
          <p>Depending on how you interact with Bright Spiral Literacy, we may collect:</p>
          <ul>
            <li>Your name, email address, country, contact details, and communication preferences.</li>
            <li>Purchase, booking, payment-status, and invoice information supplied through Stan Store, Skool, or their payment providers. Bright Spiral Literacy does not receive your full payment-card number.</li>
            <li>Your child’s name, age, grade, languages, school history, previous instruction, reading concerns, parent observations, and goals.</li>
            <li>School records and other documents you choose to provide for an agreed service.</li>
            <li>Assessment observations, reading performance, instructional plans, lesson notes, progress information, and recommendations.</li>
            <li>Messages, form responses, call notes, and records of our work together.</li>
            <li>Basic technical information needed to operate and secure the website, such as IP address, browser information, and server logs.</li>
          </ul>
          <p>Please do not send medical records, identity documents, or other highly sensitive files through a general contact form. We will explain the appropriate process when records are needed.</p>

          <h2>Why we use this information</h2>
          <ul>
            <li>To answer inquiries and help you choose an appropriate next step.</li>
            <li>To process purchases, arrange sessions, deliver services, and provide support.</li>
            <li>To understand a child’s reading in context and prepare individualized recommendations or instruction.</li>
            <li>To maintain service, accounting, safeguarding, and communication records.</li>
            <li>To improve our services and protect the website from spam, misuse, and security threats.</li>
            <li>To send educational emails, updates, or offers when you have separately agreed to receive them.</li>
          </ul>

          <h2>Our legal bases</h2>
          <p>Under the GDPR, we process information when it is necessary to respond before a possible contract, perform a contract with you, comply with a legal obligation, or pursue a legitimate business interest which does not override your rights. We use consent for optional marketing. If you choose to provide health, disability, or other special-category information which is relevant to the service, we will request explicit consent or rely on another lawful basis before using it.</p>

          <h2>Children’s information</h2>
          <p>A parent or legal guardian provides information about a child and authorizes the child’s participation. Children should not purchase services, join mailing lists, or submit website forms themselves. We use child information only to understand the family’s request and provide the agreed educational service.</p>

          <h2>Who helps us process information</h2>
          <p>We use trusted providers to operate the business. These may include OpenAI Sites and Cloudflare for website hosting and security; Stan Store and its payment providers for Jennifer’s sales and invoicing; Skool and its payment providers for The Parent Reading Room; Google Workspace and Google Forms for documents and intake; MailerLite for optional email communication; and the video-meeting or scheduling provider identified during booking.</p>
          <p>Each provider receives only the information needed for its role and processes information under its own terms and privacy commitments. We may also share information with professional advisers or public authorities when required by law. We do not sell personal information.</p>

          <h2>International transfers</h2>
          <p>Some providers may process information outside Italy or the European Economic Area. When GDPR rules apply, we rely on an adequacy decision, approved contractual safeguards, or another lawful transfer mechanism.</p>

          <h2>How long we keep information</h2>
          <p>We keep personal information only for as long as it is needed for the purpose described above. The period depends on the relationship, the child’s service, safeguarding needs, possible disputes, and Italian accounting or legal requirements. When information is no longer needed, we delete it or remove identifying details. Marketing information is kept until you unsubscribe or withdraw consent.</p>

          <h2>Security</h2>
          <p>We use reasonable organizational and technical measures to protect personal information. No online service can guarantee absolute security, so please use the secure method we provide when sharing child records.</p>

          <h2>Your rights</h2>
          <p>Depending on the circumstances, you may ask to access, correct, delete, restrict, or receive a copy of your information, or object to certain processing. You may withdraw consent at any time without affecting earlier lawful processing. You may unsubscribe from marketing through any email or by contacting us.</p>
          <p>Send a request to <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>. We may need to verify your identity. You may also complain to the Italian Data Protection Authority, the Garante per la protezione dei dati personali, or the data protection authority where you live.</p>

          <h2>Automated decisions</h2>
          <p>Bright Spiral Literacy does not use automated decision-making to decide what a child needs. Educational recommendations are made through professional review and judgment.</p>

          <h2>Cookies and external links</h2>
          <p>Read our <Link href="/cookies">Cookie and Storage Policy</Link> for information about website storage. When you follow a link to Stan Store, Skool, or another provider, that provider’s privacy policy also applies.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy when our services or providers change. The date at the top shows the latest version. Material changes will be explained on the website or by email when appropriate.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
