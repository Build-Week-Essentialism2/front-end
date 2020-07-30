import {
  INITIAL_FETCH,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_SUCCESS,
  REMOVE_SUCCESS,
} from "../actions";

const initialState = {
  goals: [],
  isFetching: true,
  error: "",
  isSaving: false,
  updated: false,
};
export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INITIAL_FETCH:
      return {
        ...state,
        isFetching: true,
        error: "",
        updated: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        goals: action.payload,
        updated: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        updated: false,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        updated: true,
      };
    case REMOVE_SUCCESS:
      return {
        ...state,
        updated: true,
      };
    default:
      return state;
  }
};
