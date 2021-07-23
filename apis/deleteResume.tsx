import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import getHeaders from "../utils/headers";

const deleteResume = async (token: string = null, _id: string) => {
  const res = await axios.delete(`${API_URL}/${API_VERSION}/meta/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};

export default deleteResume;
