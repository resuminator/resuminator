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
 * Creates a new resume for the current user.
 * @param token Firebase ID Token
 * @returns Resume Data Object if success, error if limit exceeded.
 */
export const getNewResume = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/resume/new`, {
    headers: getHeaders(token),
  });
  return res.data;
};

/**
 * Clones an existing resume using the passed resume `_id`
 * @param _id Resume ID to clone from.
 * @returns Resume Data Object
 */
export const getCloneResume =
  (_id = "") =>
  async (token: string = null) => {
    const res = await axios.get(`${baseUrl}/resume/new/${_id}`, {
      headers: getHeaders(token),
    });
    return res.data;
  };

/**
 * Fetches the data of the resume with given `_id`
 * @param token Firebase ID Token
 * @param _id Resume ID to get the data
 * @returns Resume Data Object
 */
export const getResumeData = async (token: string = null, _id: string) => {
  const res = await axios.get(`${baseUrl}/resume/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};

/**
 * Deletes a given resume with the `_id`
 * @param token Firebase ID Token
 * @param _id Resume ID to delete the resume
 * @returns New User Metadata Object
 */
export const deleteResume = async (token: string = null, _id: string) => {
  const res = await axios.delete(`${baseUrl}/meta/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};
