import React from "react";
import { Helmet } from "react-helmet-async";
import {
  pageTitle,
  canonical,
  defaultDescription,
  defaultOgImage,
  absoluteUrl,
  siteName,
} from "../../lib/seo";

export interface SEOProps {
  /** Route-specific title (the brand suffix is added automatically). */
  title?: string;
  /** Meta description. Falls back to the site-wide default. */
  description?: string;
  /** Route path (e.g. "/about"). Used for the canonical URL and og:url. */
  path?: string;
  /** Open Graph / Twitter image URL. Falls back to the brand OG image. */
  image?: string;
  /**
   * One or more JSON-LD documents to embed. Each will be rendered in its
   * own <script type="application/ld+json"> tag.
   */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Optional Open Graph type override (default "website"). */
  ogType?: "website" | "article" | "profile";
  /** When true, advise crawlers not to index this page. */
  noIndex?: boolean;
}

/**
 * <SEO> — drop this near the top of any page component to emit the proper
 * title, meta description, canonical URL, OG/Twitter cards, and JSON-LD.
 *
 * Example:
 *   <SEO title="About" description="..." path="/about" jsonLd={founderJsonLd()} />
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image,
  jsonLd,
  ogType = "website",
  noIndex = false,
}) => {
  const finalTitle = pageTitle(title);
  const finalDesc = description ?? defaultDescription;
  const finalUrl = canonical(path);
  const finalImage = image ? absoluteUrl(image) : defaultOgImage;

  const jsonLdDocs = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={finalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />

      {jsonLdDocs.map((doc, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {JSON.stringify(doc)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
