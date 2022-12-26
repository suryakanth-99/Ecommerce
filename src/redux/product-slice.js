import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Used to know about the request status
export const STATUSES = Object.freeze({
  SUCCESS: "Success",
  NOT_REQUESTED: "Not_requested",
  ERROR: "error",
  REQUESTED: "Requested",
});

//Async call to get all products
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(productActions.getStatus(STATUSES.REQUESTED));
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(productActions.getallProducts(response.data));
      dispatch(productActions.getStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(productActions.getStatus(STATUSES.ERROR));
    }
  };
};

//productSlice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: STATUSES.NOT_REQUESTED,
  },
  reducers: {
    getallProducts(state, action) {
      state.products = action.payload;
    },
    getStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
