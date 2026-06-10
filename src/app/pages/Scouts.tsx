import React from "react";
import { SEO } from "../components/SEO";
import { ScrollProgress } from "../components/ui/motion";
import { breadcrumbJsonLd } from "../../lib/jsonld";
import { ScoutsHero } from "./scouts/ScoutsHero";
import { StatsStrip } from "./scouts/StatsStrip";
import { HowItWorks } from "./scouts/HowItWorks";
import { FeaturedPipeline } from "./scouts/FeaturedPipeline";
import { PartnerNetwork } from "./scouts/PartnerNetwork";
import { WhyChooseUs } from "./scouts/WhyChooseUs";
import { RequestAccessForm } from "./scouts/RequestAccessForm";
import { ScoutsFAQ } from "./scouts/ScoutsFAQ";
import { FinalCTA } from "./scouts/FinalCTA";

/**
 * /scouts — landing page for credentialed scouts, recruiters, agents,
 * club officials, and academy directors.
 *
 * The page is composed of small, self-contained sections living in
 * ./scouts/. Each section owns its own copy, layout, and a11y semantics.
 * The form section preserves the wire schema from the previous
 * implementation: name, email, organization, country, position (role),
 * message, consent, website (honeypot).
 */
export const Scouts: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white text-[#0F172A]">
      <ScrollProgress />
      <SEO
        path="/scouts"
        title="Scout Access — Egypt's Next European-Bound Talent"
        description="Credentialed scout access to The Maker's 110+ scholars across 16 Egyptian governorates. Verified pipeline, video, stats, and direct European partnerships. No fee."
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Scouts", path: "/scouts" },
        ])}
      />

      <ScoutsHero />
      <StatsStrip />
      <HowItWorks />
      <FeaturedPipeline />
      <PartnerNetwork />
      <WhyChooseUs />
      <RequestAccessForm />
      <ScoutsFAQ />
      <FinalCTA />
    </div>
  );
};

export default Scouts;
