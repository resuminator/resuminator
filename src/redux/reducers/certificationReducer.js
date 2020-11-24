import { updateField } from "../actions";
const { CERTIFICATION_INFO } = require("../actionTypes");

const initialState = [
  {
    id: 0,
    name: "",
    authority: "",
    number: "",
    obtained: "",
    expires: "",
    link: ""
  },
];

const certificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERTIFICATION_INFO.ADD: {
      return [
        ...state,
        {
          id: action.id,
          name: "",
          authority: "",
          number: "",
          obtained: "",
          expires: "",
          link: ""
        },
      ];
    }
    case CERTIFICATION_INFO.UPDATE: {
      return updateField(state, action);
    }
    default: {
      return state;
    }
  }
};

export default certificationReducer;
