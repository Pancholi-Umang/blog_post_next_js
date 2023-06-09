import { HYDRATE } from "next-redux-wrapper";
import * as types from "../actionTypes";

const initialState = { drink: [], food: [], resto: [], users:[], user:{}, usercart:[], loading:true, login:"",check:[] };

const productReducer = (state = initialState, action) => {
  if (action.type === types.FETCH_ALL_FOOD) {
    return {
      ...state,
      food: action.payload,
      loading:false
    }
  }else if (action.type === types.FETCH_ALL_DRINK) {
    return {
      ...state,
      drink: action.payload,
      loading:false
    }
  }else if (action.type === types.FETCH_ALL_RESTORENT) {
    return {
      ...state,
      resto: action.payload,
      loading:false
    }
  }else if (action.type === types.GET_USERS_DATA) {
    return {
      ...state,
      users: action.payload,  
      loading:false
    }
  }else if (action.type === types.POST_USERS_DATA) {
    return {
      ...state,
      users: [...state.users, action.payload],
      loading:false
    }
  }else if (action.type === types.SINGLE_USERS_DATA) {
    return {
      ...state,
      user: action.payload,
      loading:false
    }
  }else if (action.type === types.SINGLE_USERS_SET) {
    return {
      ...state,
      user: action.payload,
      loading:false
    }
  }else if (action.type === types.GET_CART_DATA) {
    return {
      ...state,
      usercart: action.payload,
      loading:false
    }
  }else if (action.type === types.USERS_SET) {
    return {
      ...state,
      login: action.payload,
      loading:false
    }
  }else if (action.type === types.CHECK_CART) {
    return {
      ...state,
      check: action.payload,
      loading:false
    }
  }else if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload?.item,
    }
  }else {
    return state;
  }
};

export default productReducer;