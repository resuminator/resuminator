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

import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { SkillDataObject } from "../modules/UserInput/Skills/types";
import getHeaders from "../utils/headers";

/**
 * Updates the Skills Data Array of a Resume
 * @param token Firebase ID Token
 * @param resumeId Resume ID to update
 * @param body Skills Data Array.
 * @returns Skills object of the given resume.
 */
export const patchSkillData = async (
  token: string = null,
  resumeId: string,
  body: Array<SkillDataObject>
) => {
  const res = await axios.patch(
    `${API_URL}/${API_VERSION}/resume/skill/data/${resumeId}`,
    body,
    {
      headers: getHeaders(token)
    }
  );
  return res.data;
};

/**
 * Updates the Skills Display format.
 * @param token Firebase ID Token
 * @param resumeId Resume ID to update
 * @param body Key Value pair where key is "format" and value is either "CATEGORIES" | "TAGS"
 * @returns Data from Skills object of the given resume
 */
export const patchSkillFormat = async (
  token: string = null,
  resumeId: string,
  body: { [key: string]: "CATEGORIES" | "TAGS" }
) => {
  const res = await axios.patch(
    `${API_URL}/${API_VERSION}/resume/skill/format/${resumeId}`,
    body,
    {
      headers: getHeaders(token)
    }
  );
  return res.data;
};
