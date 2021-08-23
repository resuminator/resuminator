import axios from "axios";
import API_URL from "../config/server";

export const addSubscriber = async (details: { email: string }) => {
  const res = await axios.post(`${API_URL}/broadmap/subscribe`, details);
  return res.data;
};
