import { VIEW } from "../actionTypes";

const initialState = {
  experience: true,
  education: true,
  certification: true,
  projects: true,
  skills: true,
};

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW.TOGGLE: {
      return { ...state, [action.payload]: !state[action.payload] };
    }
    default: {
      return state;
    }
  }
};
