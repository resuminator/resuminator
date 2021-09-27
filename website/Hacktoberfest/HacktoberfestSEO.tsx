import { NextSeo } from "next-seo";
import React from "react";

interface Props {}

const OG_IMAGE =
  "https://user-images.githubusercontent.com/30192068/134771473-14c8e259-5012-4c2c-a4d1-efe7fdd44ca8.png";

const HacktoberfestSEO = (props: Props) => {
  const config = {
    title: "Contribute to Resuminator | Hacktoberfest 2021",
    description:
      "Participate in Hacktoberfest 2021 Hosted by DigitalOcean with Resuminator. Contribute to our codebase and earn your PR towards completing the Hacktoberfest challenge.",
    canonical: "https://www.resuminator.in",
    openGraph: {
      url: "https://www.resuminator.in/hacktoberfest",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 628,
          alt: "Contribute to Resuminator | Hacktoberfest 2021",
        },
        {
          url: OG_IMAGE,
          width: 1200,
          height: 600,
          alt: "Contribute to Resuminator | Hacktoberfest 2021",
        },
      ],
      site_name: "Contribute to Resuminator | Hacktoberfest 2021",
    },
    twitter: {
      handle: "@resuminator",
      cardType: "summary_large_image",
    },
  };

  return (
    <NextSeo
      openGraph={{
        title: config.title,
        description: config.description,
        ...config.openGraph,
      }}
      {...config}
    />
  );
};

export default HacktoberfestSEO;
