import axios from "axios";
import { baseUrl } from "../config/apis";

export const coldStartServer = async () => {
  return await axios.get(`${baseUrl}`).catch((err) =>
    err.response.status === 503
      ? {
          redirect: {
            permanent: false,
            destination: "/maintenance",
          },
        }
      : {
          redirect: {
            permanent: false,
            destination: "/500",
          },
        }
  );
};
