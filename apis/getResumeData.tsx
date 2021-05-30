import axios from "axios";
import API_URL from "../config/server";

const getResumeData = async () => {
  const res = await axios.get(`${API_URL}/resume`);
  return res.data;
};

export default getResumeData;
