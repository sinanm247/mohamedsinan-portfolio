import { SITE } from '../../../Constants/site';

export default function Seo({
  title,
  description,
  path = '',
  image = SITE.defaultImage,
  noindex = false,
}) {
  const fullTitle = title ?? SITE.defaultTitle;
  const desc = description ?? SITE.defaultDescription;
  const url = SITE.url ? `${SITE.url}${path}` : '';

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {url && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}
