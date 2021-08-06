import axios from "axios";
import { baseUrl } from "../config/apis";

export const coldStartServer = async () => {
  return await axios
    .get(`${baseUrl}`)
    .then((res) => res.status)
    .catch((err) => err.response.status);
};
