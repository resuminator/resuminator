import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { CertificationDataObject } from "../modules/UserInput/Certification/types";
import getHeaders from "../utils/headers";

export const patchSkillData = async (
  token: string = null,
  resumeId: string,
  body: Array<CertificationDataObject>
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

export const patchSkillFormat = async (
  token: string = null,
  resumeId: string,
  body: Array<CertificationDataObject>
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
