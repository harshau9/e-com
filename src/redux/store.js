import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
  
} from "redux";
import {thunk} from "redux-thunk";
import { productReducer } from "./product/product.reducer";

const rootReducer = combineReducers({
  products: productReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
