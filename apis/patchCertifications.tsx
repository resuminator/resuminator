import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { CertificationDataObject } from "../modules/UserInput/Certification/types";
import getHeaders from "../utils/headers";

const patchCertifications = async (
  token: string = null,
  resumeId: string,
  body: Array<CertificationDataObject>
) => {
  const res = await axios.patch(
    `${API_URL}/${API_VERSION}/resume/certification/${resumeId}`,
    body,
    {
      headers: getHeaders(token),
    }
  );
  return res.data;
};

export default patchCertifications;
