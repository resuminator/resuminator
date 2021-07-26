import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { PublicationDataObject } from "../modules/UserInput/Publications/types";
import getHeaders from "../utils/headers";

const patchPublication = async (
  token: string = null,
  resumeId: string,
  body: Array<PublicationDataObject>
) => {
  const res = await axios.patch(
    `${API_URL}/${API_VERSION}/resume/publication/${resumeId}`,
    body,
    {
      headers: getHeaders(token),
    }
  );
  return res.data;
};

export default patchPublication;
