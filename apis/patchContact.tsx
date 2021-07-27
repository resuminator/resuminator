import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import { ContactDataObject } from "../modules/UserInput/Contact/types";
import getHeaders from "../utils/headers";

// type ServerKeys =
//   | "education"
//   | "experience"
//   | "projects"
//   | "certifications"
//   | "customSections"
//   | "publications";

//Base URL for the API server.
const baseUrl = `${API_URL}/${API_VERSION}`;

// type ContactAPIKeys = "name" | "image" | "job" | "social";

const patchContact = async (
  token: string = null,
  resumeId: string,
  key: string,
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
