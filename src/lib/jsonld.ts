// JSON-LD schema generators for The Maker Football Incubator.
// All generators return plain objects — the <SEO> component will stringify them.

import { siteUrl, siteName, defaultDescription, defaultOgImage } from "./seo";
import type { Player } from "./players";

type JsonLd = Record<string, unknown>;

const ORG_ID = `${siteUrl}/#organization`;
const WEBSITE_ID = `${siteUrl}/#website`;

/** SportsOrganization for the academy itself. */
export const organizationJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "@id": ORG_ID,
  name: siteName,
  alternateName: "The Maker",
  url: `${siteUrl}/`,
  logo: defaultOgImage,
  image: defaultOgImage,
  sport: "Football",
  description: defaultDescription,
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Ahmed 'Mido' Hossam",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ezbet Fahmy, El Basatin",
    addressLocality: "Cairo",
    addressRegion: "Cairo Governorate",
    postalCode: "11431",
    addressCountry: "EG",
  },
  areaServed: {
    "@type": "Country",
    name: "Egypt",
  },
  sameAs: [
    "https://www.instagram.com/themaker.eg/",
    "https://www.facebook.com/themaker.eg/",
    "https://www.youtube.com/channel/UCcN8N56wyeXMpQhYohTHUGQ",
    "https://www.linkedin.com/company/the-maker-eg",
    "https://www.tiktok.com/@themaker.eg",
  ],
};

/** WebSite entity — used on Home for sitelinks/search-box eligibility. */
export const webSiteJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${siteUrl}/`,
  name: siteName,
  description: defaultDescription,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

/** Person schema for the founder, Mido. */
export function founderJsonLd(name = "Ahmed 'Mido' Hossam"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    alternateName: "Mido",
    jobTitle: "Founder",
    worksFor: { "@id": ORG_ID },
    nationality: "Egyptian",
    description:
      "Former Egyptian international footballer and founder of The Maker Football Incubator. Built a top-flight career across Tottenham Hotspur, Roma, Marseille, Ajax, and the Egypt national team before turning to youth development.",
    url: `${siteUrl}/about`,
    knowsAbout: [
      "Football coaching",
      "Youth football development",
      "Talent scouting",
      "European football",
    ],
  };
}

/** Athlete schema for individual player profile pages. */
export function athleteJsonLd(player: Player): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    additionalType: "https://schema.org/Athlete",
    name: player.name,
    url: `${siteUrl}/players/${player.id}`,
    image: player.thumbnail,
    description: player.bio,
    jobTitle: player.position,
    height: player.height,
    weight: player.weight,
    nationality: "Egyptian",
    homeLocation: {
      "@type": "Place",
      name: player.gov,
      address: {
        "@type": "PostalAddress",
        addressRegion: player.gov,
        addressCountry: "EG",
      },
    },
    memberOf: { "@id": ORG_ID },
    affiliation: { "@id": ORG_ID },
  };
}

export interface EventInput {
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  locationName?: string;
  locationAddress?: string;
  /** ISO 3166-1 alpha-2 country code. Defaults to "EG" when omitted. */
  addressCountry?: string;
  url?: string;
  image?: string;
  status?: "EventScheduled" | "EventPostponed" | "EventCancelled" | "EventMovedOnline";
}

/** Event schema for camps and tournaments. */
export function eventJsonLd(event: EventInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: `https://schema.org/${event.status ?? "EventScheduled"}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.locationName ?? "Egypt",
      address: {
        "@type": "PostalAddress",
        streetAddress: event.locationAddress,
        addressCountry: event.addressCountry ?? "EG",
      },
    },
    image: event.image ?? defaultOgImage,
    url: event.url,
    organizer: { "@id": ORG_ID },
  };
}

export interface FaqEntry {
  q: string;
  a: string;
}

/**
 * FAQPage schema — pass an ordered list of question/answer pairs that
 * mirror the visible FAQ on the page. Google guidance: only include
 * questions that are visibly answered on the page, no marketing copy.
 */
export function faqPageJsonLd(faqs: FaqEntry[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/**
 * EducationalOrganization schema for the year-round academy programme.
 * Layered on top of the SportsOrganization (organizationJsonLd) — Google
 * supports multi-typing but the easier path is to emit a focused
 * EducationalOrganization entity here so the /academies page can advertise
 * the educational dimension of the holistic 4-pillar programme.
 */
export const academyJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/academies#academy`,
  name: "The Maker Football Academy",
  alternateName: "The Maker Academy",
  url: `${siteUrl}/academies`,
  logo: defaultOgImage,
  image: defaultOgImage,
  description:
    "Year-round, scholarship-first football academy by Ahmed 'Mido' Hossam. Holistic training, education, nutrition, and culture for U-10 to U-18 players across Egypt.",
  parentOrganization: { "@id": ORG_ID },
  founder: {
    "@type": "Person",
    name: "Ahmed 'Mido' Hossam",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ezbet Fahmy, El Basatin",
    addressLocality: "Cairo",
    addressRegion: "Cairo Governorate",
    postalCode: "11431",
    addressCountry: "EG",
  },
  areaServed: {
    "@type": "Country",
    name: "Egypt",
  },
  educationalCredentialAwarded:
    "Scholarship placement in the year-round Maker Football Incubator (training, education, nutrition, and culture pillars).",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Maker Academy Scholarship",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Year-Round Scholarship",
        description:
          "Fully-funded scholarship covering training, kit, meals, transport stipend, and education support for selected scholars.",
        price: "0",
        priceCurrency: "EGP",
        eligibleRegion: { "@type": "Country", name: "Egypt" },
      },
    ],
  },
};

/** LocalBusiness for the Contact page (so Google Maps / knowledge panels can pick it up). */
export const localBusinessJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/contact#business`,
  name: siteName,
  description: defaultDescription,
  url: `${siteUrl}/contact`,
  image: defaultOgImage,
  telephone: "+201094045658",
  email: "admissions@themaker.eg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ezbet Fahmy, El Basatin",
    addressLocality: "Cairo",
    addressRegion: "Cairo Governorate",
    postalCode: "11431",
    addressCountry: "EG",
  },
  areaServed: {
    "@type": "Country",
    name: "Egypt",
  },
  parentOrganization: { "@id": ORG_ID },
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList — pass an ordered list of crumbs from root to current page. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${siteUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

/** Combine multiple JSON-LD blobs into a single @graph payload. */
export function combineJsonLd(...graphs: (JsonLd | JsonLd[] | null | undefined)[]): JsonLd {
  const flat: JsonLd[] = [];
  for (const g of graphs) {
    if (!g) continue;
    if (Array.isArray(g)) flat.push(...g);
    else flat.push(g);
  }
  return {
    "@context": "https://schema.org",
    "@graph": flat.map((g) => {
      // Strip the per-blob @context so the graph context wins.
      const { ["@context"]: _ctx, ...rest } = g as Record<string, unknown>;
      return rest;
    }),
  };
}
