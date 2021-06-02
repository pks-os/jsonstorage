import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Multichannel content personalization. Store, manage, personalize JSON content for your headless website, mobile app, or anything else',
  author = 'Alexander Doroshenko',
  meta,
  title = 'JsonStorage - multichannel JSON storage and personalization',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: `/og.png`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `twitter:image`,
      content: `/og.png`,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-74Z1J72Y8N"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-74Z1J72Y8N', { page_path: window.location.pathname });
            `,
          }}
        />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
