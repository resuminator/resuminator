import { findNextId } from "../../utils/Helpers";

export const addEducation = (array) => {
  return {
    type: "ADD_EDUCATION_INFO",
    id: findNextId(array),
  };
};

export const deleteEducationById = (id) => {
  return {
    type: "DELETE_EDUCATION_INFO",
    id,
  };
};

export const updateEducationById = (id, payload) => {
  return {
    type: "UPDATE_EDUCATION_INFO",
    payload,
    id,
  };
};
