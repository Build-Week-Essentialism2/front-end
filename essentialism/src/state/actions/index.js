import axios from "axios";

// Actions for the API

export const fetchUserData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_START" });
    axios
      .get("http://localhost:3333/")
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
    axios
      .post("http://localhost:3333/", {
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
// return (dispatch) => {
//   dispatch({ type: "FETCH_USER_START" });
//   axios
//     .get("http://localhost:3333/")
//     .then((res) => {
//       console.log("Axios Reponse", res);
//       dispatch({ type: "FETCH_USER_SUCCESS", payload: res.data });
//     })
//     .catch((err) => {
//       console.log("Axios error", err);
//     });
// };
// export const createUser = (newUser) => {
//     return dispatch => {
//         axios
//             .post('http://localhost:3333/',
//             {
//                 firstName: newUser.firstName,
//                 lastName: newUser.lastName,
//                 email: newUser.email,
//                 id: Date.now(),
//             }
//             )
//             .then(res => {
//                 console.log("Axios Reponse from createUser POST", res)
//                 dispatch({ type: 'POST_NEW_USER', payload: res.data})
//             })
//             .catch(err => {console.log('Axios error from POST', err)})
//     }
// }

// Actions without the API

export const toggleValue = (id) => {
  console.log("Value clicked from toggleValue action", id);
  return (dispatch) => {
    dispatch({ type: "TOGGLE_VALUE", payload: id });
  };
};

export const updateNavName = (username) => {
  console.log("Value clicked from updateNavName action", username);
  return (dispatch) => {
    dispatch({ type: "CHANGE_NAV_NAME", payload: username });
  };
};

export const logoutNavName = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_NAV_NAME" });
  };
};

//CRUD operation

//Create
export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

//Read
export const INITIAL_FETCH = "INITIAL_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

//Update
export const START_EDITING = "START_EDITING";
export const CANCEL_EDITING = " CANCEL_EDITING";

export const UPDATE_GOAL = " UPDATE-GOAL";
export const UPDATE_GOAL_SUCCESS = " UPDATE_GOAL_SUCCESS";
export const UPDATE_GOAL_ERROR = "UPDATE_GOAL_ERROR";

export const COMPLETE_GOAL = "COMPLETE_GOAL";

//Delete
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_SUCCESS = "REMOVE_SUCCESS";
export const REMOVE_FAILURE = "REMOVE_FAILURE";

//Create
export const addGoal = (title, date) => {
  return (dispatch) => {
    dispatch({ type: "ADD_GOAL", payload: { title: title, date: date } });
  };
};

//Read
export const fetchGoals = () => (dispatch) => {
  dispatch({ type: INITIAL_FETCH });
  axios
    .get("http://localhost:3333")
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAIL, payload: err.response }));
};

//Update

export const editGoal = (id) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_GOAL", payload: id });
  };
};

//Delete
export const removeGoal = (id) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_GOAL", payload: id });
  };
};

export const addValue = (newValue) => {
  return (dispatch) => {
    dispatch({ type: "ADD_VALUE", payload: newValue });
  };
};

export const deleteValue = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_VALUE", payload: id });
  };
};

export const editValue = (id) => {
  return (dispatch) => {
    dispatch({ type: "EDIT_VALUE", payload: id });
  };
};

export const submitEditGoal = (id, formState) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_GOAL_SUCCESS",
      payload: { id: id, formState: formState },
    });
  };
};

export const submitEditValue = (id, formState) => {
  return (dispatch) => {
    dispatch({
      type: "SUBMIT_EDIT_VALUE",
      payload: { id: id, formState: formState },
    });
  };
};
