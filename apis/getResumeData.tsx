import axios from "axios";
import API_URL from "../config/server";

const getResumeData = async (id: string) => {
  const res = await axios.get(`${API_URL}/resume/${id}`);
  return res.data;
};

export default getResumeData;
