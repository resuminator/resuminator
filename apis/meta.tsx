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
import { baseUrl } from "../config/apis";
import getHeaders from "../utils/headers";

/**
 * Get user's metadata which includes mostly metadata about resumes.
 * @param token Firebase ID Token
 * @returns Data from /meta endpoint
 */
export const getUserData = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/meta`, {
    headers: getHeaders(token)
  });
  return res.data;
};

/**
 *
 * @param token Firebase ID Token
 * @param _id Resume ID
 * @param body Key:Value pair to update example `{profileName: "XYZ"}` or `{color: "blue"}`
 * @returns Data from /meta
 */
export const patchResumeMeta = async (
  token: string = null,
  _id: string,
  body: any
) => {
  const res = await axios.patch(`${baseUrl}/meta/${_id}`, body, {
    headers: getHeaders(token)
  });
  return res.data;
};
