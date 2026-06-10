import React from "react";
import { SEO } from "../components/SEO";
import { ScrollProgress } from "../components/ui/motion";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  academyJsonLd,
} from "../../lib/jsonld";
import { AcademiesHero } from "./academies/AcademiesHero";
import { AcademyStatsStrip } from "./academies/AcademyStatsStrip";
import { WhoCanJoin } from "./academies/WhoCanJoin";
import { FourPillars } from "./academies/FourPillars";
import { LocationsMap } from "./academies/LocationsMap";
import { ApplicationProcess } from "./academies/ApplicationProcess";
import { Alumni } from "./academies/Alumni";
import { Testimonials } from "./academies/Testimonials";
import { Scholarships } from "./academies/Scholarships";
import { ApplyForm } from "./academies/ApplyForm";
import { AcademiesFAQ, FAQS } from "./academies/AcademiesFAQ";
import { FinalCTA } from "./academies/FinalCTA";

/**
 * /academies — landing page for the year-round, scholarship-first football
 * academy programme run by The Maker Football Incubator.
 *
 * Composition root only. Each section is a small self-contained component
 * in ./academies/ owning its own copy, layout, and a11y semantics. JSON-LD
 * emission feeds EducationalOrganization + FAQPage for AI/SEO indexing.
 */
export const Academies: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white text-[#0F172A]">
      <ScrollProgress />
      <SEO
        path="/academies"
        title="The Maker Football Academy — Egypt's Premier Youth Football Programme"
        description="Year-round, scholarship-first football academy by Ahmed 'Mido' Hossam. Holistic training, education, nutrition, and culture for U-10 to U-18 across Egypt. Apply for the next intake."
        jsonLd={[
          academyJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Academies", path: "/academies" },
          ]),
          faqPageJsonLd(FAQS),
        ]}
      />

      <AcademiesHero />
      <AcademyStatsStrip />
      <WhoCanJoin />
      <FourPillars />
      <LocationsMap />
      <ApplicationProcess />
      <Alumni />
      <Scholarships />
      <Testimonials />
      <ApplyForm />
      <AcademiesFAQ />
      <FinalCTA />
    </div>
  );
};

export default Academies;
