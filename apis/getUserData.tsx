import axios from "axios";
import API_URL from "../config/server";

const getUserData = async () => {
  const res = await axios.get(`${API_URL}/users`);
  return res.data;
};

export default getUserData;
