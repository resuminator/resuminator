import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import getHeaders from "../utils/headers";

const getResumeData = async (token: string = null, _id: string) => {
  const res = await axios.get(`${API_URL}/${API_VERSION}/resume/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};

export default getResumeData;
