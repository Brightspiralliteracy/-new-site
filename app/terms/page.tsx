import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../page";

export const metadata: Metadata = {
  title: "Client Terms and Service Agreement",
  description: "The service, payment, scheduling, cancellation, and family responsibilities for Bright Spiral Literacy services.",
};

export default function Terms() {
  return (
    <>
      <Header />
      <main className="legal-page" id="main-content">
        <header>
          <p className="eyebrow">Last updated 4 August 2026</p>
          <h1>Client Terms and Service Agreement</h1>
          <p>These terms explain what families can expect when purchasing the Reading Clarity Blueprint or Reading Turnaround from Bright Spiral Literacy.</p>
        </header>
        <article>
          <h2>1. Your service provider</h2>
          <p>These services are provided by <strong>Jennifer Lynn Overstreet, Partita IVA 18182311003</strong>, trading as Bright Spiral Literacy, Via dei Banchi Nuovi 11, 00186 Rome, Italy. Contact: <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>.</p>
          <p>Stan Store handles checkout, payment processing, and invoicing. Its platform terms also apply to your use of Stan Store, but this agreement governs the educational service provided by Bright Spiral Literacy.</p>

          <h2>2. Forming the agreement</h2>
          <p>You must be the child’s parent or legal guardian, or have authority to purchase the service and authorize the child’s participation. The agreement begins when you complete checkout, accept these terms, and payment is confirmed. The service description and price shown at checkout form part of this agreement.</p>

          <h2>3. Reading Clarity Blueprint</h2>
          <p>The Reading Clarity Blueprint is a complete professional service designed to explain how your child reads, where difficulty begins, and what should happen next. The current price is <strong>€1,200</strong>.</p>
          <p>It includes:</p>
          <ul>
            <li>A comprehensive initial evaluation.</li>
            <li>Review of relevant school records, learning history, parent observations, and goals.</li>
            <li>Two individual 45-minute assessment sessions with your child.</li>
            <li>Professional interpretation of reading strengths, needs, and instructional priorities.</li>
            <li>A parent-friendly written Reading Profile.</li>
            <li>A one-page teacher summary.</li>
            <li>A personalized 8-week Reading Support Plan which a parent, school, or another tutor can use.</li>
            <li>A parent consultation and recommendation for what should happen next.</li>
          </ul>
          <p>The written profile, teacher summary, and 8-week plan are normally delivered within 7 days of the second assessment session, provided all requested information has been received.</p>

          <h2>4. Reading Turnaround</h2>
          <p>Reading Turnaround is a 12-week individualized teaching program. The current price is <strong>€5,200</strong>. It includes the Reading Clarity Blueprint and:</p>
          <ul>
            <li>Personalized instructional planning.</li>
            <li>24 individualized 45-minute lessons, normally twice each week.</li>
            <li>Progress monitoring and adjustments to teaching.</li>
            <li>Parent communication.</li>
            <li>End-of-program recommendations.</li>
            <li>Bonus access to The Parent Reading Room during the program, when available.</li>
          </ul>
          <p>Families receive a consistent weekly schedule. The program is designed for approximately 12 weeks and must normally be completed within 14 weeks to allow for illness or unavoidable scheduling conflicts.</p>

          <h2>5. Moving from the Blueprint to Turnaround</h2>
          <p>If you purchase the Reading Clarity Blueprint first and request Reading Turnaround within 30 days after your completed Blueprint is delivered, the €1,200 Blueprint payment is credited toward the €5,200 Turnaround price.</p>
          <p>The credit does not reserve or guarantee a Turnaround place. Places are limited. If no place is available when you request Turnaround within the 30-day period, Bright Spiral Literacy will explain the expected wait and whether the Blueprint findings are still current. Any extension of the credit must be confirmed in writing and is not automatic. Dr. Jenn may request a brief update or additional review before teaching begins if your child’s instruction, reading, or circumstances have changed.</p>

          <h2>6. Payment and invoices</h2>
          <p>Prices are displayed before checkout and payment is made through Stan Store. Stan Store or its payment provider issues the transaction record or invoice. Any bank, card, currency-conversion, or platform charge imposed by a third party is your responsibility unless the law requires otherwise.</p>

          <h2>7. Your right to withdraw</h2>
          <p>If you are an EU or EEA consumer purchasing online, you normally have 14 days from the date of the agreement to withdraw without giving a reason. To withdraw, email a clear statement to <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a>.</p>
          <p>If you ask us to begin work during that 14-day period and later withdraw, you must pay a proportionate amount for the work completed before your request. If a service has been fully performed during the withdrawal period after your express request and acknowledgement, the statutory withdrawal right ends when performance is complete. These terms do not limit any consumer right which cannot legally be limited.</p>

          <h2>8. Cancellations and refunds</h2>
          <h3>Reading Clarity Blueprint</h3>
          <p>After the statutory withdrawal period, or once the service has begun at your request, Blueprint payments are final except where applicable law requires otherwise. This reflects the individualized professional review, assessment time, analysis, and written work involved.</p>
          <h3>Reading Turnaround</h3>
          <p>The €5,200 price consists of €1,200 for the Blueprint and €4,000 for the 24-lesson teaching portion. If you decide to end Turnaround early, the unused teaching portion will be refunded on a prorated basis. Each lesson is valued at €166.67 for this calculation. The completed Blueprint portion is not refundable except where applicable law requires otherwise.</p>
          <p>Lessons already delivered, missed without notice, or cancelled with less than 24 hours’ notice count as used. Approved refunds are returned through the original payment method where possible.</p>

          <h2>9. Scheduling and attendance</h2>
          <p>Please provide at least 24 hours’ notice to cancel or request a different lesson time. We will offer a make-up lesson when scheduling permits, but make-ups and unlimited rescheduling are not guaranteed. A late cancellation or missed lesson normally counts as completed.</p>
          <p>If Bright Spiral Literacy must cancel, we will offer a replacement time. If we cannot provide the remaining service, we will refund the undelivered portion.</p>

          <h2>10. Family responsibilities</h2>
          <p>You agree to provide accurate information, relevant records, and timely updates; ensure your child has a safe, suitable place and functioning technology for online sessions; support reasonable attendance; and communicate respectfully. A parent or responsible adult must remain available during online work with a child.</p>
          <p>You must tell us about information which may materially affect safe or appropriate service delivery. Do not record a session without written agreement from everyone involved.</p>

          <h2>11. Educational scope and outcomes</h2>
          <p>Bright Spiral Literacy provides educational assessment, planning, and reading instruction. The Blueprint is instructional, not a medical, psychological, or diagnostic evaluation. It does not replace advice from a regulated healthcare professional or a formal diagnosis where one is needed.</p>
          <p>We provide individualized professional care, but no specific score, reading level, school decision, or rate of progress can be guaranteed. Results depend on the child’s needs, attendance, instruction, health, school context, and other factors. Testimonials describe individual experiences, not promised outcomes.</p>

          <h2>12. Materials and intellectual property</h2>
          <p>Reports and family resources may be used by you, your child, and your child’s current educators for the child’s educational support. Bright Spiral Literacy retains ownership of its frameworks, teaching materials, templates, training, and methods. They may not be sold, published, copied for unrelated families, used to train a commercial system, or distributed publicly without written permission.</p>

          <h2>13. Ending services for safety or conduct</h2>
          <p>Bright Spiral Literacy may pause or end a service if information necessary for safe delivery is withheld, payment is reversed, repeated attendance problems prevent meaningful work, or conduct toward Dr. Jenn, a contractor, or another participant is unsafe, abusive, or seriously disruptive. Where appropriate, we will explain the concern and provide a reasonable opportunity to address it. Any refund will be calculated according to work already completed and mandatory law.</p>

          <h2>14. Privacy</h2>
          <p>Our <Link href="/privacy">Privacy Policy</Link> explains how parent and child information is handled. By purchasing a service, you confirm that you are authorized to provide the child’s information and relevant records.</p>

          <h2>15. Responsibility and liability</h2>
          <p>Nothing in this agreement excludes liability which cannot legally be excluded, including mandatory consumer rights. To the extent permitted by law, Bright Spiral Literacy is not responsible for indirect loss, decisions made independently by a school or third party, internet or platform outages outside our reasonable control, or results affected by incomplete or inaccurate information.</p>

          <h2>16. Events outside reasonable control</h2>
          <p>Neither party is responsible for delay caused by events outside reasonable control, including serious illness, emergencies, natural events, widespread service outages, or government restrictions. We will communicate promptly and try to arrange a fair alternative.</p>

          <h2>17. Concerns, law, and disputes</h2>
          <p>Please email concerns to <a href="mailto:hello@brightspiralliteracy.com">hello@brightspiralliteracy.com</a> so we can try to resolve them directly. Italian law governs this agreement, without taking away mandatory consumer protections or the right to use a competent court available to you under applicable law.</p>

          <h2>18. Changes and the complete agreement</h2>
          <p>The version accepted at checkout applies to your purchase. We may update these terms for future purchases. If one part is unenforceable, the remaining parts continue to apply. This agreement, the checkout description, and any written service confirmation make up the agreement between you and Bright Spiral Literacy.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
