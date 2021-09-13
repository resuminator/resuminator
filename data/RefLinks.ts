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

export const DISCORD_INVITE = "https://discord.resuminator.in";
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_APP_PROD
    : "http://localhost:3000";
export const SUPPORT_EMAIL = "mailto:support@resuminator.in";
export const GITHUB_ISSUE =
  "https://github.com/resuminator/resuminator/issues/new?assignees=&labels=bug&template=BUG-REPORT.yml&title=%F0%9F%90%9B+Bug%3A+";
export const RESUMINATOR_TWITTER = "https://twitter.com/resuminator";
export const WEBSITE = "https://resuminator.in";
export const BUY_ME_A_COFFEE = "https://www.buymeacoffee.com/resuminator";
export const GITHUB_REPO = "https://github.com/resuminator/resuminator";
export const GITHUB_REPO_GFI = "https://github.com/resuminator/resuminator/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22";
export const BROADMAP_HOMEPAGE = "https://broadmap.resuminator.in/";
export const BROADMAP_TWITTER = "https://twitter.com/broadmaps";
export const BROADMAP_SHARE_TWITTER =
  "https://www.twitter.com/share?url=http%3A%2F%2Fbroadmap.resuminator.in%2F&via=revue&text=I%20just%20discovered%20%40broadmaps%20by%20%40resuminator.%20The%20concept%20of%20getting%20a%20%22playlist%22%20of%20resources%20every%20week%20seems%20exciting%20to%20me%21%20Calling%20all%20curious%20folks%20to%20give%20it%20a%20try%20for%20sure.&related=revue";
export const RESUMINATOR_SHARE_TWITTER =
  "https://www.twitter.com/share?url=https%3A%2F%2Fresuminator.in%2F&text=I%20just%20signed%20up%20for%20%40resuminator%20and%20I%27m%20excited%20to%20try%20it%20out%21%20Calling%20out%20all%20job%20seekers%20to%20give%20it%20a%20try%20this%20season.%20%23ResuminatorResume%20";
export const CONTRIBUTE_HINTS="";