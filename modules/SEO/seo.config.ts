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
        url: "/og1.png",
        width: 1200,
        height: 628,
        alt: defaultSeoConfig.title,
      },
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: defaultSeoConfig.title,
      },
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
