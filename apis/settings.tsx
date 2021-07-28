import axios from "axios";
import { baseUrl } from "../config/apis";
import getHeaders from "../utils/headers";

export const placeAccountDataRequest = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/settings/account/request`, {
    headers: getHeaders(token),
  });

  return res.data;
};

export const getAccountSettings = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/settings/account`, {
    headers: getHeaders(token),
  });

  return res.data;
};

export const deleteAccount = async (token: string = null) => {
  const res = await axios.delete(`${baseUrl}/settings/account`, {
    headers: getHeaders(token),
  });

  return res.data;
};
