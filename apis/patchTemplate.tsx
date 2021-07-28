import axios from "axios";
import { baseUrl } from "../config/apis";
import {
  ColorProfiles,
  FontProfile,
  ResumeInputsArray,
  ResumeLayoutObject,
} from "../store/types";
import getHeaders from "../utils/headers";

const patchTemplate =
  <T extends unknown>(key: string) =>
  async (
    token: string = null,
    resumeId: string,
    body: { [key: string]: T }
  ) => {
    const res = await axios.patch(
      `${baseUrl}/resume/template/${key}/${resumeId}`,
      body,
      {
        headers: getHeaders(token),
      }
    );

    return res.data;
  };

export const patchInput = patchTemplate<ResumeInputsArray>("layout");
export const patchLayout = patchTemplate<ResumeLayoutObject>("layout");
export const patchFont = patchTemplate<FontProfile>("font");
export const patchSpacing = patchTemplate<number>("spacing");

/**
 * Patches color in Resume Template as well as in Metadata
 * @param token Auth Token
 * @param resumeId Resume ID to change the properties
 * @param body Key value pair to be changed
 * @returns Response Data: Resume Object
 */
export const patchColor = async (
  token: string = null,
  resumeId: string,
  body: { [key: string]: ColorProfiles }
) => {
  const [res] = await axios.all([
    await axios.patch(`${baseUrl}/resume/template/color/${resumeId}`, body, {
      headers: getHeaders(token),
    }),
    await axios.patch(`${baseUrl}/meta/${resumeId}`, body, {
      headers: getHeaders(token),
    }),
  ]);

  return res.data;
};
