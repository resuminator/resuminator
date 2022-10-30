/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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

import { FeatureFlags } from "./FeatureFlags";
import { AccessLevel } from "./types";

export const free_access: AccessLevel = {
  id: "free",
  name: "Free",
  features: [FeatureFlags.WATERMARK]
};

export const pro_access: AccessLevel = {
  id: "pro",
  name: "Pro",
  features: [FeatureFlags.SHARE_LINKS, FeatureFlags.CHAT_SUPPORT]
};

export const featureDetails = {
  share_links: {
    valueProp:
      "Shareable links help Pro users get faster feedback and 4x more views on their resumes."
  }
};
