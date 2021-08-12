import axios from "axios";
import { baseUrl } from "../config/apis";
import getHeaders from "../utils/headers";

/**
 * Creates a new resume for the current user.
 * @param token Firebase ID Token
 * @returns Resume Data Object if success, error if limit exceeded.
 */
export const getNewResume = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/resume/new`, {
    headers: getHeaders(token),
  });
  return res.data;
};

/**
 * Clones an existing resume using the passed resume `_id`
 * @param _id Resume ID to clone from.
 * @returns Resume Data Object
 */
export const getCloneResume =
  (_id = "") =>
  async (token: string = null) => {
    const res = await axios.get(`${baseUrl}/resume/new/${_id}`, {
      headers: getHeaders(token),
    });
    return res.data;
  };

/**
 * Fetches the data of the resume with given `_id`
 * @param token Firebase ID Token
 * @param _id Resume ID to get the data
 * @returns Resume Data Object
 */
export const getResumeData = async (token: string = null, _id: string) => {
  const res = await axios.get(`${baseUrl}/resume/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};

/**
 * Deletes a given resume with the `_id`
 * @param token Firebase ID Token
 * @param _id Resume ID to delete the resume
 * @returns New User Metadata Object
 */
export const deleteResume = async (token: string = null, _id: string) => {
  const res = await axios.delete(`${baseUrl}/meta/${_id}`, {
    headers: getHeaders(token),
  });
  return res.data;
};
