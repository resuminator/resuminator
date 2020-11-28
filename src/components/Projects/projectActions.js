import { findNextId } from "../../utils/Helpers";

export const addProject = (array) => {
  return {
    type: "ADD_PROJECT_INFO",
    id: findNextId(array),
  };
};

export const deleteProjectById = (id) => {
  return {
    type: "DELETE_PROJECT_INFO",
    id,
  };
};

export const updateProjectById = (id, payload) => {
  return {
    type: "UPDATE_PROJECT_INFO",
    payload,
    id,
  };
};
