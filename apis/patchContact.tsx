import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { ContactDataObject } from "../modules/UserInput/Contact/types";
import getHeaders from "../utils/headers";


//Base URL for the API server.
const baseUrl = `${API_URL}/${API_VERSION}`;

const patchContact =
  (key: string) =>
  async (
    token: string = null,
    resumeId: string,
    body: { [key: string]: string | Array<ContactDataObject> }
  ) => {
    const res = await axios.patch(
      `${baseUrl}/resume/contact/${key}/${resumeId}`,
      body,
      {
        headers: getHeaders(token),
      }
    );

    return res.data;
  };

export default patchContact;
