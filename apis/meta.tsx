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
    headers: getHeaders(token),
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
    headers: getHeaders(token),
  });
  return res.data;
};
