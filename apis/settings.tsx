import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import getHeaders from "../utils/headers";

//Base URL for the API server.
const baseUrl = `${API_URL}/${API_VERSION}`;

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
