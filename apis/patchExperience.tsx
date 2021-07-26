import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { ExperienceDataObject } from "../modules/UserInput/Experience/types";
import getHeaders from "../utils/headers";

const patchExperience = async (
  token: string = null,
  resumeId: string,
  body: Array<ExperienceDataObject>
) => {
  const res = await axios.patch(
    `${API_URL}/${API_VERSION}/resume/experience/${resumeId}`,
    body,
    {
      headers: getHeaders(token),
    }
  );
  return res.data;
};

export default patchExperience;
