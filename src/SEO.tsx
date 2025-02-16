import Helmet from 'react-helmet';
import seoJson from '../seo.json';

export const SEO = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{seoJson.title}</title>
    <link rel="canonical" href={seoJson.openGraph.url} />
    <meta name="description" content={seoJson.description} />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    {/* Open Graph / Facebook */}
    <meta property="og:title" content={seoJson.openGraph.title} />
    <meta property="og:description" content={seoJson.openGraph.description} />
    <meta property="og:url" content={seoJson.openGraph.url} />
    <meta property="og:type" content={seoJson.openGraph.type} />
    <meta property="og:image" content={seoJson.openGraph.images[0].url} />
    <meta property="og:image:alt" content={seoJson.openGraph.images[0].alt} />
    <meta
      property="og:image:width"
      content={`${seoJson.openGraph.images[0].width}`}
    />
    <meta
      property="og:image:height"
      content={`${seoJson.openGraph.images[0].height}`}
    />
    <meta property="og:locale" content={seoJson.openGraph.locale} />
    <meta property="og:site_name" content={seoJson.openGraph.site_name} />
    {seoJson.additionalMetaTags?.map((metaTag) => (
      <meta property={metaTag.name} content={metaTag.content} />
    ))}
  </Helmet>
);
