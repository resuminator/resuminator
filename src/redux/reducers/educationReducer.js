import { updateField } from "../actions";
const { EDUCATION_INFO } = require("../actionTypes");

const initialState = [
  {
    id: 0,
    institute: "",
    location: "",
    degree: "",
    stream: "",
    grade: 0.0,
    total: 0.0,
    start: "",
    end: "",
    description: ``,
  },
];

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDUCATION_INFO.ADD: {
      return [
        ...state,
        {
          id: action.id,
          institute: "",
          location: "",
          degree: "",
          stream: "",
          grade: "",
          total: "",
          start: "",
          end: "",
          description: ``,
        },
      ];
    }
    case EDUCATION_INFO.UPDATE: {
      return updateField(state, action);
    }
    default: {
      return state;
    }
  }
};

export default educationReducer;
