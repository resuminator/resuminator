import axios from "axios";
import { baseUrl } from "../config/apis";

/**
 * Helps cold start the Heroku server by making an empty request to base endpoint
 * @returns Response code from the backend server
 */
export const coldStartServer = async () => {
  return await axios
    .get(`${baseUrl}`)
    .then((res) => res.status || 200)
    .catch((err) => err.response.status || 500);
};
