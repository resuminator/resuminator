import { findNextId } from "../../utils/Helpers";

export const addExperience = (array) => {
  return {
    type: "ADD_EXPERIENCE_INFO",
    id: findNextId(array),
  };
};

export const deleteExperienceById = (id) => {
  return {
    type: "DELETE_EXPERIENCE_INFO",
    id,
  };
};

export const updateExperienceById = (id, payload) => {
  return {
    type: "UPDATE_EXPERIENCE_INFO",
    payload,
    id,
  };
};
