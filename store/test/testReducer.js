import { TEST } from "./testConstant";
const initialState = {
  token: "",
  error: "",
  Nav: "",
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
