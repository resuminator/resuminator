import { NextSeo } from "next-seo";
import React from "react";

interface Props {}

const OG_IMAGE =
  "https://user-images.githubusercontent.com/30192068/193661835-69ee41c3-5c31-4aa2-8757-afaf204afc78.png";

const HacktoberfestSEO = (props: Props) => {
  const config = {
    title: "Contribute to Resuminator's Open Source Codebase | Hacktoberfest 2022",
    description:
      "Participate in Hacktoberfest 2022 Hosted by DigitalOcean, AppWrite, and Docker with Resuminator. Contribute to our codebase and earn your PR towards completing the Hacktoberfest challenge.",
    canonical: "https://www.resuminator.in",
    openGraph: {
      url: "https://www.resuminator.in/hacktoberfest",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 628,
          alt: "Contribute to Resuminator's Open Source Codebase | Hacktoberfest 2022"
        },
        {
          url: OG_IMAGE,
          width: 1200,
          height: 600,
          alt: "Contribute to Resuminator's Open Source Codebase | Hacktoberfest 2022"
        }
      ],
      site_name: "Contribute to Resuminator's Open Source Codebase | Hacktoberfest 2022"
    },
    twitter: {
      handle: "@resuminator",
      cardType: "summary_large_image"
    }
  };

  return (
    <NextSeo
      openGraph={{
        title: config.title,
        description: config.description,
        ...config.openGraph
      }}
      {...config}
    />
  );
};

export default HacktoberfestSEO;
