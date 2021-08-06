import axios from "axios";
import { baseUrl } from "../config/apis";
import getHeaders from "../utils/headers";

export const getUserData = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/meta`, {
    headers: getHeaders(token),
  });
  return res.data;
};

export const patchResumeMeta = async (
  token: string = null,
  _id: string,
  body: any
) => {
  const res = await axios.patch(`${baseUrl}/meta/${_id}`, body, {
    headers: getHeaders(token),
  });
  return res.data;
};
