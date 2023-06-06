import axios from "axios";
import * as types from "./actionTypes";
// json-server --watch db.json --port 5000 --host 192.168.1.2

export const postUsersdata = (data) => {
  return function (dispatch) {
    axios?.post(`http://192.168.29.229:5000/users`, data).then((res) => {
      dispatch({
        type: types?.POST_USERS_DATA,
        payload: res?.data,
      });
    });
  };
};

export const getUsersdata = () => {
  return function (dispatch) {
    axios?.get(`http://192.168.29.229:5000/users`).then((res) => {
      dispatch({
        type: types?.GET_USERS_DATA,
        payload: res?.data,
      });
    });
  };
};

export const getCartdata = (id) => {
  return function (dispatch) {
    axios?.get(`http://192.168.29.229:5000/cart/?user_id=${id}`).then((res) => {
      dispatch({
        type: types?.GET_CART_DATA,
        payload: res?.data,
      });
    });
  };
};

export const postCartdata = (data) => {
  return function (dispatch) {
    axios?.post(`http://192.168.29.229:5000/cart`, data)
    .then((res) => {
      dispatch(getCartdata(data?.user_id));
    })
  };
};

export const removeCartItem = (id,user_id) => {
  return function (dispatch) {
    axios?.delete(`http://192.168.29.229:5000/cart/${id}`)
    .then((res) => {
      dispatch(getCartdata(user_id));
    });
  };
};

export const getSingleUsers = (data) => {
  return function (dispatch) {
    axios?.get(
        `http://192.168.29.229:5000/users/?email=${data?.email}&password=${data?.password}`
      )
      .then((res) => {
        res?.data?.length == 0
          ? localStorage.setItem("loginBlog", JSON.stringify(res.data))
          : (localStorage.setItem("loginBlog", JSON.stringify(res.data[0])),
            dispatch({
              type: types?.SINGLE_USERS_DATA,
              payload: res?.data[0],
            }));
      });
  };
};

export const setUser = (data) => {
  return function (dispatch) {
    dispatch({
      type: types?.USERS_SET,
      payload: data,
    });
  };
};
