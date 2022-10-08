import {
  TOPAIRTHEE,
  LOADING,
  TOPAIR,
  TOPAIRTEN,
  RECENTTENJAP,
  RECENTALLJAP,
  RECENTTENDUB,
  RECENTALLDUB,
  RECENTTENCH,
  RECENTALLCH,
  MOVIESALL,
  MOVIESTEN,
  POPULARTEN,
  PAPULARALL,
  ANIMEDETAIL,
  WATCHANIME,
  SEARCHANIME,
  SEARCHLODER,
  GENERCE,
  TOPAIRLOADING
} from "./animeConstant";
const initialState = {
  loading: false,
  AirThree: [],
  airTheeLoading:true,
  TopAir: [],
  TopAirTen: [],
  japten: [],
  japall: [],
  dubten: [],
  duball: [],
  chten: [],
  chall: [],
  movieten: [],
  movieall: [],
  popularten: [],
  popularall: [],
  animedetail: [],
  watchanime: [],
  searchanime: [],
  searchLoader: false,
  genre:[]
};

export const AnimeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
      case TOPAIRLOADING:
        return {
          ...state,
          airTheeLoading: true,
        };
    case TOPAIRTHEE:
      return {
        ...state,
        airTheeLoading: false,
        AirThree: payload,
      };
    case TOPAIR:
      return {
        ...state,
        loading: false,
        TopAir: payload,
      };
    case TOPAIRTEN:
      return {
        ...state,
        loading: false,
        TopAirTen: payload,
      };
    case RECENTTENJAP:
      return {
        ...state,
        loading: false,
        japten: payload,
      };
    case RECENTALLJAP:
      return {
        ...state,
        loading: false,
        japall: payload,
      };
    case RECENTTENDUB:
      return {
        ...state,
        loading: false,
        dubten: payload,
      };
    case RECENTALLDUB:
      return {
        ...state,
        loading: false,
        duball: payload,
      };
    case RECENTTENCH:
      return {
        ...state,
        loading: false,
        chten: payload,
      };
    case RECENTALLCH:
      return {
        ...state,
        loading: false,
        chall: payload,
      };
    case SEARCHLODER:
      return {
        ...state,
        loading: false,
        searchLoader: false,
      };
    case SEARCHANIME:
      return {
        ...state,
        loading: false,
        searchanime: payload,
        searchLoader: false,
      };
    case WATCHANIME:
      return {
        ...state,
        loading: false,
        watchanime: payload,
      };
    case ANIMEDETAIL:
      return {
        ...state,
        loading: false,
        animedetail: payload,
      };

    case PAPULARALL:
      return {
        ...state,
        loading: false,
        popularall: payload,
      };
    case POPULARTEN:
      return {
        ...state,
        loading: false,
        popularten: payload,
      };
    case MOVIESALL:
      return {
        ...state,
        loading: false,
        movieall: payload,
      };
    case MOVIESTEN:
      return {
        ...state,
        loading: false,
        movieten: payload,
      };
      case GENERCE:
      return {
        ...state,
        loading: false,
        genre: payload,
      };

    default:
      return state;
  }
};
