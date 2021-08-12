import axios from "axios";
import { baseUrl } from "../config/apis";
import {
  ColorProfiles,
  FontProfile,
  ResumeInputsArray,
  ResumeLayoutObject,
} from "../store/types";
import getHeaders from "../utils/headers";

/**
 * HOC to update the given section of the template object inside the resume data.
 * @param key Key to update inside the template object
 * @returns Resume data object.
 */
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

/**
 * Updates the `input` key of the template
 */
export const patchInput = patchTemplate<ResumeInputsArray>("input");

/**
 * Updates the `layout` key of the template
 */
export const patchLayout = patchTemplate<ResumeLayoutObject>("layout");

/**
 * Updates the `font` key of the template
 */
export const patchFont = patchTemplate<FontProfile>("font");

/**
 * Updates the `spacing` key of the template
 */
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
