import Axios from "axios";
import axios from "axios";

// Actions for the API

export const fetchUserData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_START" });
    Axios.get("http://localhost:3333/")
      .then((res) => {
        console.log("Axios Reponse", res);
        dispatch({ type: "FETCH_USER_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log("Axios error", err);
      });
  };
};

export const createUser = (newUser) => {
  return (dispatch) => {
    Axios.post("http://localhost:3333/", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      id: Date.now(),
    })
      .then((res) => {
        console.log("Axios Reponse from createUser POST", res);
        dispatch({ type: "POST_NEW_USER", payload: res.data });
      })
      .catch((err) => {
        console.log("Axios error from POST", err);
      });
  };
};

// Actions without the API

export const toggleValue = (id) => {
  console.log("Value clicked from toggleValue action", id);
  return (dispatch) => {
    dispatch({ type: "TOGGLE_VALUE", payload: id });
  };
};

//THIS IS WHERE THE API SENDS A REQUEST AND RETURN THE INFORMATION
export const INITIAL_FETCH = "INITIAL_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
//FORM THAT ADDS
export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
//WHEN DELETING
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_SUCCESS = "REMOVE_SUCCESS";
export const REMOVE_FAILURE = "REMOVE_FAILURE";

export const fetchGoals = () => (dispatch) => {
  dispatch({ type: INITIAL_FETCH });
  axios
    .get("http://localhost:3333")
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAIL, payload: err.response }));
};

export const addGoal = (title, date) => (dispatch) => {
  dispatch({ type: ADD_START });
  axios
    .post("http://localhost:3333", { title, date })
    .then((res) => dispatch({ type: ADD_SUCCESS }))
    .catch((err) => dispatch({ type: ADD_FAILURE }));
};

export const removeGoal = (id) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM });
  axios
    .delete(`http://localhost:3333`)
    .then((res) => dispatch({ type: REMOVE_SUCCESS }))
    .catch((err) => dispatch({ type: REMOVE_FAILURE }));
};
