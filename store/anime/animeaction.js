import axios from "../../utils/axios";
import { TOPAIRTHEE } from "./animeConstant";
import Swal from "sweetalert2";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const topAirAction = () => async (dispatch) => {
  try {
    let res = await axios.get(`/top-airing`);
    const slicedArray = res?.data?.slice(0, 3);
    dispatch({
      type: TOPAIRTHEE,
      paylode: slicedArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const topAirActionPagewise = (page) => async (dispatch) => {
  try {
    let res = await axios.get(`/top-airing/${page}`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
