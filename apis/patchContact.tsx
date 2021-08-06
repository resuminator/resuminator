import axios from "axios";
import { baseUrl } from "../config/apis";
import { ContactDataObject } from "../modules/UserInput/Contact/types";
import getHeaders from "../utils/headers";

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
