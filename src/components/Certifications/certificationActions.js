import { findNextId } from "../../utils/Helpers";

export const addCertificate = (array) => {
  return {
    type: "ADD_CERTIFICATION_INFO",
    id: findNextId(array),
  };
};

export const deleteCertificateById = (id) => {
  return {
    type: "DELETE_CERTIFICATION_INFO",
    id,
  };
};

export const updateCertificateById = (id, payload) => {
  return {
    type: "UPDATE_CERTIFICATION_INFO",
    payload,
    id,
  };
};
