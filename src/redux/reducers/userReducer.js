import { USERINFO } from "../actionTypes";

const initialState = {
  userInfo: {
    name: "",
    jobtitle: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINFO.ADD: {
      const { name, jobtitle } = action.payload;
      return {
        ...state,
        name,
        jobtitle,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
