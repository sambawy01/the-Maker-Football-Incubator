// SEO helpers — central config for canonical URLs, site name, and title formatting.

export const siteUrl = "https://sambawy01.github.io/the-Maker-Football-Incubator";
export const siteName = "The Maker Football Incubator";
export const siteTagline = "Egypt's Premium Youth Football Academy";
export const defaultDescription =
  "Egypt's first homegrown football incubator. A talent-first scholarship academy preparing youth players for European football, founded by Ahmed 'Mido' Hossam.";
export const defaultOgImage = `${siteUrl}/og-default.svg`;
export const themeColor = "#16A34A";

/**
 * Compose a page title. If a route-specific title is provided, append the
 * site name. If not, fall back to the brand title with tagline.
 */
export function pageTitle(routeTitle?: string): string {
  if (!routeTitle || !routeTitle.trim()) {
    return `${siteName} | ${siteTagline}`;
  }
  // Avoid duplicating brand if caller already included it.
  if (routeTitle.toLowerCase().includes("the maker")) {
    return routeTitle;
  }
  return `${routeTitle} | ${siteName}`;
}

/**
 * Build a canonical URL for a given route path. Always returns an https URL
 * rooted at the GitHub Pages site.
 */
export function canonical(path?: string): string {
  if (!path || path === "/") return `${siteUrl}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Strip trailing slash to keep canonicals consistent (except root).
  const withoutTrailing = clean.length > 1 && clean.endsWith("/") ? clean.slice(0, -1) : clean;
  return `${siteUrl}${withoutTrailing}`;
}

/** Resolve a possibly-relative image path to an absolute URL. */
export function absoluteUrl(maybeRelative: string): string {
  if (!maybeRelative) return defaultOgImage;
  if (/^https?:\/\//i.test(maybeRelative)) return maybeRelative;
  const clean = maybeRelative.startsWith("/") ? maybeRelative : `/${maybeRelative}`;
  return `${siteUrl}${clean}`;
}
