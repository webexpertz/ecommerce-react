
import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";


export default combineReducers({
  auth: UserReducer,
  product: ProductReducer,
  cart: CartReducer
});
