import type { Metadata } from "next";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "Cookie and Storage Policy",
  description: "How the Bright Spiral Literacy website uses cookies and browser storage.",
};

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="legal-page" id="main-content">
        <header><p className="eyebrow">Current website settings</p><h1>Cookie and Storage Policy</h1><p>A short explanation of what this website stores on your device.</p></header>
        <article>
          <h2>Current setting: essential only</h2>
          <p>The current Bright Spiral website does not run Google Analytics, Meta Pixel, Plausible, advertising cookies, or behavioral tracking.</p>

          <h2>Essential technology</h2>
          <p>The hosting platform and security services may use short-lived technical information required to deliver pages, prevent abuse, and keep the site available. Interactive features also keep temporary state while you use them.</p>

          <h2>External links</h2>
          <p>Paperbell, Stan Store, MailerLite, and other external services set their own cookies after you open their websites. Their policies control those cookies.</p>

          <h2>Future analytics</h2>
          <p>Bright Spiral will request consent before adding non-essential analytics or advertising tools for visitors where consent is required. This page and the Privacy Policy will name each tool before it becomes active.</p>

          <h2>Questions</h2>
          <p>Email <a href="mailto:jenn@brightspiralliteracy.com">jenn@brightspiralliteracy.com</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
