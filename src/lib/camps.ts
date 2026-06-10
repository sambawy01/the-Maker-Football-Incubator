// Typed catalogue of Maker Football Incubator camps.
// One source of truth for both the FeaturedCamps grid and the SEO/JSON-LD
// emission on the /camps page. Adding a new camp here will surface it in
// both places without code changes.
//
// Reminder: if you add or rename a camp id below, also update
// ALLOWED_PREFERRED_CAMPS in supabase/functions/server/validators.tsx.
// Server is Deno, frontend is Vite — they can't share a module, so the
// allow-list is duplicated by design.

export type CampSeason =
  | "Winter"
  | "Summer"
  | "International"
  | "Year-Round";

export type CampAgeGroup =
  | "U-10"
  | "U-12"
  | "U-14"
  | "U-16"
  | "U-18";

export type CampHighlight = "Most popular" | "Limited spots" | "New";

export interface Camp {
  /** Stable slug. Used as the URL hash anchor `#register?camp={id}`. */
  id: string;
  /** Human-readable name. */
  name: string;
  /** Season pill label. */
  season: CampSeason;
  /** Age groups served by this camp. */
  ageGroups: CampAgeGroup[];
  /** Human-readable date range, e.g. "15 Dec 2026 – 5 Jan 2027". */
  dates: string;
  /** ISO start date for SportsEvent JSON-LD. */
  startDate?: string;
  /** ISO end date for SportsEvent JSON-LD. */
  endDate?: string;
  /** Where the camp runs. */
  location: string;
  /** Coarse duration description, e.g. "2 weeks". */
  duration: string;
  /** Live availability — for the scarcity progress bar. */
  spotsRemaining: number;
  /** Total cohort size. */
  totalSpots: number;
  /** Starting price in EGP. */
  priceFrom: number;
  /** Optional ribbon (Most popular / Limited spots / null). */
  highlight?: CampHighlight;
  /** Single-sentence pitch. */
  tagline: string;
  /** What the fee includes — surfaced as a bullet list (top 4 shown on card). */
  inclusions: string[];
}

/**
 * NOTE on dates: We use 2026/2027 dates intentionally — the site is
 * forward-dated and these match the marketing calendar communicated to
 * parents. Adjust as the season rolls.
 */
export const camps: Camp[] = [
  {
    id: "winter-2026",
    name: "Winter Training Camp",
    season: "Winter",
    ageGroups: ["U-10", "U-12", "U-14"],
    dates: "15 Dec 2026 – 28 Dec 2026",
    startDate: "2026-12-15",
    endDate: "2026-12-28",
    location: "Maker HQ, New Cairo",
    duration: "2 weeks",
    spotsRemaining: 18,
    totalSpots: 48,
    priceFrom: 8000,
    tagline:
      "Technical block during the school break. Daily training, small-sided games, and a closing tournament.",
    inclusions: [
      "Two training sessions per day",
      "Full kit (training top, shorts, socks)",
      "Daily meals and recovery",
      "End-of-camp tournament",
      "Coach-written attribute report",
    ],
  },
  {
    id: "summer-elite-2027",
    name: "Summer Elite Camp",
    season: "Summer",
    ageGroups: ["U-14", "U-16", "U-18"],
    dates: "10 Jul 2027 – 31 Jul 2027",
    startDate: "2027-07-10",
    endDate: "2027-07-31",
    location: "Sahel, North Coast",
    duration: "3 weeks",
    spotsRemaining: 9,
    totalSpots: 36,
    priceFrom: 18000,
    highlight: "Most popular",
    tagline:
      "Our flagship sleep-away camp on the North Coast. Pro-tempo training, video review, and beach recovery.",
    inclusions: [
      "Full board accommodation",
      "Three weekly training sessions",
      "Sports science + nutrition",
      "Video review and individual feedback",
      "Pool, beach recovery, supervised downtime",
    ],
  },
  {
    id: "international-2027",
    name: "International Showcase Camp",
    season: "International",
    ageGroups: ["U-16", "U-18"],
    dates: "10 Mar 2027 – 20 Mar 2027",
    startDate: "2027-03-10",
    endDate: "2027-03-20",
    location: "Cairo + Cyprus",
    duration: "10 days",
    spotsRemaining: 4,
    totalSpots: 16,
    priceFrom: 35000,
    highlight: "Limited spots",
    tagline:
      "Closing week observed by Enosis Paralimni staff. Selection-driven, application reviewed by Mido.",
    inclusions: [
      "Round-trip flight Cairo–Larnaca",
      "Hotel + meals in Cyprus",
      "Training at Enosis Paralimni facility",
      "Live scouting by club staff",
      "Pathway interview on selection day",
    ],
  },
  {
    id: "year-round-2027",
    name: "Year-Round Development Programme",
    season: "Year-Round",
    ageGroups: ["U-10", "U-12", "U-14", "U-16", "U-18"],
    dates: "Rolling monthly cohorts",
    startDate: "2026-09-01",
    endDate: "2027-08-31",
    location: "Maker HQ, New Cairo",
    duration: "Monthly cohort",
    spotsRemaining: 22,
    totalSpots: 80,
    priceFrom: 5000,
    tagline:
      "After-school development for committed players. Three sessions per week with continuous tracking.",
    inclusions: [
      "Three weekly evening sessions",
      "Monthly attribute progression report",
      "Match-day coaching at fixtures",
      "Strength & conditioning block",
      "Eligible for incubator scholarship review",
    ],
  },
];

export function campById(id: string): Camp | undefined {
  return camps.find((c) => c.id === id);
}
