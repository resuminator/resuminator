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

/**
 * Downloads the current resume as a PDF file.
 * @param id Resume ID to download the resume
 * @returns A Resume PDF
 */
export const downloadPdf = async (token: string, id: string) => {
  return await axios.get(`${process.env.NEXT_PUBLIC_PAPYRUS}/api?id=${id}`, {
    responseType: "arraybuffer",
    headers: {
      authorization: token,
      Accept: "application/pdf",
    },
  });
};
