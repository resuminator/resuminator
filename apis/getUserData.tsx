import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import getHeaders from "../utils/headers";

const getUserData = async (token: string = null) => {
  const res = await axios.get(`${API_URL}/${API_VERSION}/meta`, {
    headers: getHeaders(token),
  });
  return res.data;
};

export default getUserData;
