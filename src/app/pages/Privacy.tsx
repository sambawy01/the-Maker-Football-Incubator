import React from "react";
import { Link } from "../components/ui/Link";
import { SEO } from "../components/SEO";

export const Privacy = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO
        path="/privacy"
        title="Privacy Policy — The Maker"
        description="How The Maker Football Incubator collects, uses, and protects personal data — including the additional safeguards we apply to young athletes under 18."
      />
      <article className="max-w-3xl mx-auto px-4 py-20 prose prose-slate">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: 2026-06-10</p>

        <p>
          The Maker Football Incubator (“The Maker”, “we”, “us”, or “our”) is committed
          to protecting the privacy of the young athletes, parents, guardians, scouts,
          partners, and visitors who interact with us. This Privacy Policy explains
          what personal information we collect, how we use it, who we share it with,
          and the choices you have. By using our website, submitting an enquiry, or
          enrolling in any of our programmes, you agree to the practices described
          below.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We only collect information that is necessary to run our youth football
          academy, scouting network, and partner programmes responsibly. Depending on
          how you interact with us, we may collect:
        </p>
        <ul>
          <li>
            <strong>Contact details</strong> — name, email address, phone number, city
            of residence, and (for international enquiries) country.
          </li>
          <li>
            <strong>Applicant information</strong> — player name, date of birth,
            position, dominant foot, height, weight, current club or school, and any
            relevant football history you choose to share.
          </li>
          <li>
            <strong>Parent or guardian details</strong> — name, relationship to the
            player, contact information, and consent records when the applicant is
            under 18.
          </li>
          <li>
            <strong>Scouting and partnership data</strong> — organization, role,
            country, and the nature of your enquiry.
          </li>
          <li>
            <strong>Technical data</strong> — IP address, browser type, device
            information, and basic analytics about how you use this website.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information you provide for the following purposes:</p>
        <ul>
          <li>To respond to enquiries submitted through our contact and scouts forms.</li>
          <li>
            To evaluate trial requests, scholarship applications, and academy
            admissions.
          </li>
          <li>
            To coordinate training schedules, camps, fixtures, and travel for enrolled
            players.
          </li>
          <li>
            To communicate with parents and guardians about safeguarding, performance,
            and welfare matters.
          </li>
          <li>
            To share player profiles with vetted scouts, agents, and partner clubs
            (such as Enosis Paralimni and SC Farense) only with explicit, written
            parental or player consent.
          </li>
          <li>
            To improve the website, our programmes, and the services we offer to the
            football community.
          </li>
          <li>To comply with our legal, regulatory, and safeguarding obligations.</li>
        </ul>

        <h2>3. Children’s Privacy</h2>
        <p>
          A significant portion of our community is under the age of 18. We take
          extra care with their data. We do not knowingly collect personal information
          from anyone under 16 without the verifiable consent of a parent or legal
          guardian. Parents and guardians may review, correct, or request the deletion
          of their child’s information at any time by contacting us at the address
          below. We never sell children’s data and we do not use it for advertising.
        </p>

        <h2>4. Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We only share it with:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run the academy (for
            example, hosting providers such as Supabase, email tools, and analytics
            tools), all of whom are bound by confidentiality obligations.
          </li>
          <li>
            <strong>European partner clubs and trusted scouts</strong>, only with the
            specific consent of the player and their parent or guardian.
          </li>
          <li>
            <strong>Authorities</strong>, where we are legally required to do so or
            where it is necessary to protect the safety of a child or another person.
          </li>
        </ul>

        <h2>5. Your Rights (Including under GDPR)</h2>
        <p>
          If you are based in the European Economic Area, the United Kingdom, or any
          other jurisdiction with similar data protection laws, you have the right to:
        </p>
        <ul>
          <li>Request access to the personal data we hold about you.</li>
          <li>Ask us to correct inaccurate or incomplete information.</li>
          <li>
            Request the deletion of your data where there is no overriding legal or
            safeguarding reason to keep it.
          </li>
          <li>Object to or restrict certain types of processing.</li>
          <li>Withdraw consent at any time, where consent is the legal basis for processing.</li>
          <li>Lodge a complaint with your local data protection authority.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the details in
          section 8. We aim to respond within 30 days.
        </p>

        <h2>6. Data Retention and Security</h2>
        <p>
          We retain personal data only as long as necessary for the purposes set out
          in this policy, or as required by law. Enquiry data is typically held for
          24 months; safeguarding and player welfare records may be held longer where
          legally required. We protect your data using a combination of encrypted
          transport (HTTPS), access controls, reputable cloud infrastructure, and
          internal staff training. No system is ever 100% secure, so we encourage you
          to use strong passwords and to contact us immediately if you believe your
          information has been compromised.
        </p>

        <h2>7. Cookies and Analytics</h2>
        <p>
          We use a small number of essential cookies to keep the site working and,
          where permitted, simple analytics to understand which pages are useful. We
          do not run cross-site advertising trackers. You can disable cookies in your
          browser, although some parts of the site may not function as intended.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          The Maker Football Incubator is headquartered in Cairo, Egypt. If you have
          questions about this Privacy Policy, or you would like to exercise any of
          the rights described above, please reach out:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@themaker.eg">privacy@themaker.eg</a></li>
          <li>Post: Street 90, New Cairo, Cairo, Egypt</li>
          <li>
            Web: <Link to="/contact">our contact page</Link>
          </li>
        </ul>

        <p className="text-sm text-gray-500">
          This Privacy Policy may be updated from time to time. We will post the
          revised version on this page and update the “Last updated” date above. For
          significant changes, we will make reasonable efforts to notify families and
          partners directly.
        </p>
      </article>
    </div>
  );
};
