// Note: Do not update/change the initial state
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  RESET_PRODUCTS,
} from "./product.types";
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (
  state = productInitalState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, data: [...state.data, ...payload] };
    }
    case GET_PRODUCTS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case RESET_PRODUCTS: {
      return {
        ...state,
        data: [],
        loading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
