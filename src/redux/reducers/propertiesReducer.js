import { SKILL_INFO } from "../actionTypes";

const initialState = {skill_display_type: "categories"};

export const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILL_INFO.DISPLAY_TYPE: {
      return { ...state, skill_display_type: action.payload };
    }
    default: {
      return state;
    }
  }
};
