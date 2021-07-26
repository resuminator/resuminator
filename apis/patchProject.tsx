import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { ProjectDataObject } from "../modules/UserInput/Projects/types";
import getHeaders from "../utils/headers";

const patchProjects = async (
  token: string = null,
  resumeId: string,
  body: Array<ProjectDataObject>
) => {
  const res = await axios.patch(
    `${API_URL}/${API_VERSION}/resume/project/${resumeId}`,
    body,
    {
      headers: getHeaders(token),
    }
  );
  return res.data;
};

export default patchProjects;
