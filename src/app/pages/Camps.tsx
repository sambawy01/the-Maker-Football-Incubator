import React from "react";
import { SEO } from "../components/SEO";
import { breadcrumbJsonLd, eventJsonLd } from "../../lib/jsonld";
import { camps } from "../../lib/camps";
import { CampsHero } from "./camps/CampsHero";
import { CampsStatsStrip } from "./camps/CampsStatsStrip";
import { HowCampsWork } from "./camps/HowCampsWork";
import { FeaturedCamps } from "./camps/FeaturedCamps";
import { DailySchedule } from "./camps/DailySchedule";
import { CoachNetwork } from "./camps/CoachNetwork";
import { WhyMakerCamps } from "./camps/WhyMakerCamps";
import { RegistrationForm } from "./camps/RegistrationForm";
import { CampsFAQ } from "./camps/CampsFAQ";
import { FinalCTA } from "./camps/FinalCTA";

/**
 * /camps — landing page for parents enrolling young players in seasonal
 * football camps run by the Maker Football Incubator.
 *
 * Composition root. Each section is a small self-contained component in
 * ./camps/ owning its own copy, layout, and a11y semantics. Camp catalogue
 * comes from src/lib/camps.ts so the JSON-LD emission below and the
 * FeaturedCamps grid stay in lock-step.
 */
export const Camps: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white text-[#0F172A]">
      <SEO
        path="/camps"
        title="Football Camps in Egypt — The Maker Football Incubator"
        description="Elite football camps for Egyptian youth (U-10 to U-18). Winter, summer, and international training programmes led by Mido's coaching staff at our Cairo HQ. Apply now."
        jsonLd={[
          ...camps.map((c) =>
            eventJsonLd({
              name: c.name,
              description: c.tagline,
              startDate: c.startDate,
              endDate: c.endDate,
              locationName: c.location,
              url: `https://sambawy01.github.io/the-Maker-Football-Incubator/camps#${c.id}`,
            }),
          ),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Camps", path: "/camps" },
          ]),
        ]}
      />

      <CampsHero />
      <CampsStatsStrip />
      <HowCampsWork />
      <FeaturedCamps />
      <DailySchedule />
      <CoachNetwork />
      <WhyMakerCamps />
      <RegistrationForm />
      <CampsFAQ />
      <FinalCTA />
    </div>
  );
};

export default Camps;
