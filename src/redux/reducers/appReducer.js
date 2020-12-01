import { APP } from "../actionTypes";

const initialState = {
  init: false,
  loading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP.INIT_REQUEST: {
      return { ...state, loading: true };
    }
    case APP.INIT_SUCCESS: {
      return { ...state, loading: false, init: true };
    }
    case APP.INIT_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
