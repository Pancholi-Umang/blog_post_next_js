import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import productReducer from "./reducer/productReducer";

const middleware = [thunk];

export const store = createStore(
  combineReducers({
    item:productReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);