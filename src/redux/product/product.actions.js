// Product actions here
import axios from "axios";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./product.types";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    console.log("calling");
    const { data: productData } = await axios.get(
      `https://wayfair.p.rapidapi.com/products/list?categoryId=45974&itemsPerPage=48&page=1`,
      {
        headers: {
          "X-RapidAPI-Key": "29f9cd7f28mshad11b63d1818f50p198aa1jsnbd18651f65d5",
          "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
        },
      }
    );
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: productData.response.data?.category?.browse?.products,
    });
    // if (data.data.data.length) pageChange(page + 1);
    // pageChange(page + 1)
    console.log(
      "productData:- ",
      productData.response.data.category.browse.products
    );
  } catch (error) {
    console.log("error fetching the products", error);
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
