/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { NextSeoProps } from "next-seo";
import { defaultSeoConfig } from "./default.config";
import { OGImage, OGImage_Twitter, OGLogo } from "./ogImages";

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
        url: OGImage,
        width: 1200,
        height: 628,
        alt: defaultSeoConfig.title,
      },
      {
        url: OGImage_Twitter,
        width: 800,
        height: 418,
        alt: defaultSeoConfig.title,
      },
      {
        url: OGLogo,
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
