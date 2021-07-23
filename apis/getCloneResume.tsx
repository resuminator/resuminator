import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import getHeaders from "../utils/headers";

const getCloneResume =
  (_id = "") =>
  async (token: string = null) => {
    const res = await axios.get(`${API_URL}/${API_VERSION}/resume/new/${_id}`, {
      headers: getHeaders(token),
    });
    return res.data;
  };

export default getCloneResume;
