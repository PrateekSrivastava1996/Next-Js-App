import { TOPAIRTHEE, LOADING } from "./animeConstant";
const initialState = {
  loading: false,
};

export const AnimeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
