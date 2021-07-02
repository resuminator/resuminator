import axios from "axios";
import API_URL from "../config/server";

const getUserData = async (username: string) => {
  const res = await axios.get(`${API_URL}/users/${username}`);
  return res.data;
};

export default getUserData;
