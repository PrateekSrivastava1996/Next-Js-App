import axios from "../../utils/axios";
import {
  TOPAIRTHEE,
  LOADING,
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
import Swal from "sweetalert2";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const topAirAction = () => async (dispatch) => {
  try {
    dispatch({
      type: TOPAIRLOADING,
    });
    let res = await axios.get(`/top-airing`);
    const slicedArray = res?.data?.slice(0, 3);
    dispatch({
      type: TOPAIRTHEE,
      payload: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const topAirCouusel = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/top-airing`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: TOPAIRTEN,
      payload: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const topAirActionPagewise = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/top-airing/${page}`);
    dispatch({
      type: TOPAIR,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentJapTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=1&page=1`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: RECENTTENJAP,
      payload: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentJapAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=1&page=${page}`);
    dispatch({
      type: RECENTALLJAP,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentDubTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=2&page=1`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: RECENTTENDUB,
      payload: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentDubAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=2&page=${page}`);
    dispatch({
      type: RECENTALLDUB,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const recentChTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=3&page=1`);
    const slicedArray = res?.data?.slice(0, 10);
    dispatch({
      type: RECENTTENCH,
      payload: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const recentChAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/recent-release/?type=3&page=${page}`);
    dispatch({
      type: RECENTALLCH,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const moviesTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/anime-movies/?page=1`);
    const slicedArray = res?.data?.slice(0, 3);
    dispatch({
      type: MOVIESTEN,
      payload: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const moviesAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/anime-movies/?page=${page}`);
    dispatch({
      type: MOVIESALL,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const popularTen = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/popular/?page=1`);
    const slicedArray = res?.data?.slice(0, 3);
    dispatch({
      type: POPULARTEN,
      payload: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const popularAll = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/popular/?page=${page}`);
    dispatch({
      type: PAPULARALL,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const animeDeatail = (animeId) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/anime-details/${animeId}`);
    dispatch({
      type: ANIMEDETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const watchAnime = (episodeId) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/vidcdn/watch/${episodeId}`);
    dispatch({
      type: WATCHANIME,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchAnime = (text) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/search?keyw=${text}`);
    dispatch({
      type: SEARCHANIME,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchLoader = (text) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCHLODER,
    });
  } catch (error) {
    console.log(error);
  }
};


export const genereSearch = (name) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    let res = await axios.get(`/genre/${name}`);
    dispatch({
      type: GENERCE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
