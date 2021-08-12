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
      headers: getHeaders(token),
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
      headers: getHeaders(token),
    }
  );
  return res.data;
};
