import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  schema,
  keywords = 'hotel, Pokhara, Aashirwad, luxury stay, Nepal, Himalayas, lake view'
}) => {
  const siteName = 'Hotel Aashirwad';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
  const canonicalUrl = url ? `${siteUrl}${url}` : window.location.href;
  const defaultDescription = 'Experience unparalleled luxury at Hotel Aashirwad, Pokhara. Stunning Himalayan views, premium rooms, and authentic hospitality.';
  const metaDescription = description || defaultDescription;
  
  // Clean up image URL
  const ogImage = image || `${siteUrl}/default-og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
