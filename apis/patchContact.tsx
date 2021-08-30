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
import { ContactDataObject } from "../modules/UserInput/Contact/types";
import getHeaders from "../utils/headers";

/**
 * Updates the contact object of a resume with given resume ID
 * @param key The key to update
 * @returns A function with following parameters 👇🏻
 * 
 * @param token Firebase ID Token 
 * @param resumeId Resume ID to update
 * @param body {Key, value} pair of the object. 
 */
const patchContact =
  (key: string) =>
    async (
      token: string = null,
      resumeId: string,
      body: { [key: string]: string | Array<ContactDataObject> }
    ) => {
      const res = await axios.patch(
        `${baseUrl}/resume/contact/${key}/${resumeId}`,
        body,
        {
          headers: getHeaders(token),
        }
      );

      return res.data;
    };

export default patchContact;
