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

import chromium from "chrome-aws-lambda";

const CDNBase =
  process.env.NODE_ENV === "production"
    ? "https://rawcdn.githack.com"
    : "https://raw.githack.com";
const Fonts = {
  inter: {
    regular:
      "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-400-normal.woff",
    medium:
      "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-500-normal.woff",
    semibold:
      "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-600-normal.woff",
    bold: "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-700-normal.woff",
  },
};

const loadFonts = async (instance: typeof chromium) => {
  await instance.font(`${CDNBase}/${Fonts.inter.regular}`);
  await instance.font(`${CDNBase}/${Fonts.inter.medium}`);
  await instance.font(`${CDNBase}/${Fonts.inter.semibold}`);
  await instance.font(`${CDNBase}/${Fonts.inter.bold}`);
};

export default loadFonts;
