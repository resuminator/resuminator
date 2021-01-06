import { deleteItem } from "../utils";
import { SKILL_INFO } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  display_type: "categories",
  skills: [],
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILL_INFO.UPDATE_STATE: {
      return action.payload !== null
        ? { ...state, skills: action.payload }
        : state;
    }
    case SKILL_INFO.DELETE: {
      return deleteItem(state, action);
    }
    case SKILL_INFO.DISPLAY_TYPE: {
      return { ...state, display_type: action.payload };
    }
    case SKILL_INFO.SERVER_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case SKILL_INFO.FETCH_SUCCESS: {
      return { ...state, skills: action.payload, loading: false };
    }
    case SKILL_INFO.SERVER_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};
