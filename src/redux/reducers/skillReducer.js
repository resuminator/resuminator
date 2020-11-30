import { deleteItem } from "../utils";
import { SKILL_INFO } from "../actionTypes";

const initialState = [];

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILL_INFO.ADD: {
      return action.payload !== null ? [...state, action.payload] : state;
    }
    case SKILL_INFO.DELETE: {
      return deleteItem(state, action);
    }
    default: {
      return state;
    }
  }
};
