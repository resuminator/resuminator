const { EXPERIENCE_INFO } = require("../actionTypes");

const initialState = [
  {
    id: 0,
    jobTitle: "",
    company: "",
    additionalInfo: "",
    start: "",
    end: "",
    location: "",
    description: ``,
    workLink: "",
  },
];

function updateField(array, action) {
  return array.map((item, index) => {
    if (index === action.index) {
      return {
        ...item,
        ...action.payload,
      };
    }
    return item;
  });
}
const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPERIENCE_INFO.ADD: {
      return [
        ...state,
        {
          id: action.id,
          jobTitle: "",
          company: "",
          additionalInfo: "",
          start: "",
          end: "",
          location: "",
          description: ``,
          workLink: "",
        },
      ];
    }
    case EXPERIENCE_INFO.UPDATE: {
      return updateField(state, action);
    }
    default: {
      return state;
    }
  }
};

export default experienceReducer;
