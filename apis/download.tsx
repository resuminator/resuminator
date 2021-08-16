import axios from "axios";

/**
 * Downloads the current resume as a PDF file.
 * @param id Resume ID to download the resume
 * @returns A Resume PDF
 */
export const downloadPdf = async (token: string, id: string) => {
  return await axios.get(`/api/download?id=${id}`, {
    responseType: "arraybuffer",
    headers: {
      authorization: token,
      Accept: "application/pdf",
    },
  });
};
