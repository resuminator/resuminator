import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import getHeaders from "../utils/headers";

const patchResumeMeta = async (
  token: string = null,
  _id: string,
  body: any
) => {
  console.log(token, _id, body);
  const res = await axios.patch(`${API_URL}/${API_VERSION}/meta/${_id}`, body, {
    headers: getHeaders(token),
  });
  return res.data;
};

export default patchResumeMeta;
