import axios from "axios";
import { MAIL_WEBHOOK } from "../../utils/Server";

export const triggerAssist = ({ name, email }) => {
  return axios
    .post(`${MAIL_WEBHOOK}/assist`, { name, email })
    .then((res) => res.status)
    .catch((e) => e.message);
};
