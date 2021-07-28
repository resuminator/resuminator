import axios from "axios";
import { baseUrl } from "../config/apis";
import getHeaders from "../utils/headers";

export const getNewResume = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/resume/new`, {
    headers: getHeaders(token),
  });
  return res.data;
};

export const getCloneResume =
  (_id = "") =>
  async (token: string = null) => {
    const res = await axios.get(`${baseUrl}/resume/new/${_id}`, {
      headers: getHeaders(token),
    });
    return res.data;
  };

export const getResumeData = async (token: string = null, _id: string) => {
  const res = await axios.get(`${baseUrl}/resume/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};

export const deleteResume = async (token: string = null, _id: string) => {
  const res = await axios.delete(`${baseUrl}/meta/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};
