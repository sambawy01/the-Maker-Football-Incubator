import React from "react";
import { Link } from "../components/ui/Link";
import { SEO } from "../components/SEO";

export const Terms = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO
        path="/terms"
        title="Terms of Use — The Maker"
        description="The terms and conditions that govern your use of The Maker Football Incubator website and services."
      />
      <article className="max-w-3xl mx-auto px-4 py-20 prose prose-slate">
        <h1>Terms of Use</h1>
        <p className="text-sm text-gray-500">Last updated: 2026-06-10</p>

        <p>
          Welcome to the website of The Maker Football Incubator (“The Maker”, “we”,
          “us”, or “our”), headquartered in Cairo, Egypt. These Terms of Use (the
          “Terms”) govern your access to and use of this website and the related
          enquiry forms, programme pages, and content we publish. By using this site
          you agree to these Terms. If you do not agree, please do not use the site.
        </p>

        <h2>1. Who We Are and What This Site Is For</h2>
        <p>
          The Maker is a youth football incubator that develops young Egyptian players
          through holistic training, education, and international exposure. This
          website exists to share information about our programmes (Academy,
          Scholarship Track, Dream League, Camps, Schools Programme), our European
          partnerships, our first team, and to provide a way for parents, players,
          scouts, schools, sponsors, and the media to contact us. The information on
          this site is provided for general informational purposes; it is not a
          substitute for a written agreement when you enrol in a programme.
        </p>

        <h2>2. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site in any way that breaks any applicable law or regulation.</li>
          <li>
            Submit false, misleading, or impersonating information through our forms
            (this is especially important for forms involving children).
          </li>
          <li>
            Attempt to interfere with the security of the site, its underlying
            infrastructure, or the data of other users.
          </li>
          <li>
            Scrape, copy, or republish player profiles, images, or other content
            without our written permission.
          </li>
          <li>
            Use the site to send spam, harassing messages, or anything that could
            endanger the welfare of a child.
          </li>
        </ul>

        <h2>3. Forms, Enquiries, and Trials</h2>
        <p>
          Submitting a contact, scout, or programme enquiry through our site does not
          constitute admission to any programme, a trial offer, or any guarantee of
          professional opportunity. We will review submissions in good faith and
          respond where appropriate, typically within 48 hours. Any subsequent trial,
          scholarship, or registration will be governed by a separate written
          agreement signed by you (and, where applicable, by a parent or legal
          guardian).
        </p>

        <h2>4. Players Under 18</h2>
        <p>
          If you are under 18, you must have the consent of a parent or legal guardian
          before using this site to submit personal information or apply to a
          programme. Parents and guardians are responsible for their children’s use of
          the site and for accepting these Terms on their behalf. Safeguarding the
          welfare of young athletes is central to everything we do; please review our{" "}
          <Link to="/privacy">Privacy Policy</Link> for additional protections that
          apply to children.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content on this site — including text, logos, photographs, videos,
          training materials, player profiles, and the visual design — is owned by The
          Maker Football Incubator or its licensors and is protected by intellectual
          property laws. You may view and print material for personal, non-commercial
          use. Any other use, including reproduction, redistribution, or framing on
          another site, requires our prior written consent. The names “The Maker
          Football Incubator”, “The Dream League”, and our partner club marks (used
          with permission) may not be used without authorization.
        </p>

        <h2>6. Third-Party Links and Partners</h2>
        <p>
          Our site links to third-party sites and services, including partner clubs
          such as Enosis Paralimni and SC Farense, sponsors, media outlets, and tools
          like WhatsApp and Supabase. We do not control these external sites and we
          are not responsible for their content, terms, or privacy practices. Use of
          third-party services is at your own risk and is subject to their own terms.
        </p>

        <h2>7. Disclaimers</h2>
        <p>
          We work hard to keep this site accurate and up to date, but we provide it
          “as is” and “as available” without warranties of any kind, express or
          implied. We do not warrant that the site will be uninterrupted, error-free,
          or free of viruses or harmful components. Programme details, fees, fixtures,
          camp dates, and partner information may change without notice. Sporting
          outcomes — including trials, scholarships, and progression to professional
          football — depend on many factors and cannot be guaranteed.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, The Maker, its directors,
          employees, coaches, and partners will not be liable for any indirect,
          incidental, consequential, or punitive damages arising from your use of, or
          inability to use, this site, including loss of opportunity, profits, or
          data. Nothing in these Terms limits any liability that cannot be excluded
          under the law of Egypt or your local jurisdiction.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. The current version will always
          be posted on this page with the “Last updated” date above. Continued use of
          the site after a change indicates that you accept the updated Terms.
        </p>

        <h2>10. Governing Law and Contact</h2>
        <p>
          These Terms are governed by the laws of the Arab Republic of Egypt, without
          regard to its conflict-of-laws principles. Any dispute that cannot be
          resolved amicably will be submitted to the competent courts of Cairo,
          Egypt. If you have questions about these Terms, please contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:legal@themaker.eg">legal@themaker.eg</a></li>
          <li>Post: Street 90, New Cairo, Cairo, Egypt</li>
          <li>
            Web: <Link to="/contact">our contact page</Link>
          </li>
        </ul>
      </article>
    </div>
  );
};
