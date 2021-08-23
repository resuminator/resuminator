import axios from "axios";
import { baseUrl } from "../config/apis";

export const addSubscriber = async (details: { email: string }) => {
  const res = await axios.post(`${baseUrl}`, { body: details });
  return res.data;
};
