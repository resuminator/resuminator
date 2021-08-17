import { NextSeoProps } from "next-seo";
import { defaultSeoConfig } from "./default.config";

/**
 * Config object defines a lot of properties
 * that are helpful for SEO and social preview of the website.
 * The properties are derived from the above defaultSeoConfig object.
 */
const config: NextSeoProps = {
  canonical: defaultSeoConfig.url,
  openGraph: {
    url: defaultSeoConfig.url,
    images: [
      {
        url: "https://www.example.ie/og-image-01.jpg",
        width: 800,
        height: 600,
        alt: defaultSeoConfig.title,
      },
      {
        url: "https://www.example.ie/og-image-02.jpg",
        width: 900,
        height: 800,
        alt: defaultSeoConfig.title,
      },
      { url: "https://www.example.ie/og-image-03.jpg" },
      { url: "https://www.example.ie/og-image-04.jpg" },
    ],
    site_name: defaultSeoConfig.title,
  },
  twitter: {
    handle: defaultSeoConfig.twitter,
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/logo.png",
    },
  ],
};

export default config;
