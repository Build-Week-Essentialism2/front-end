import { combineReducers } from "redux";
import { essentialismReducer } from "./essentialismReducer";
import { reducer } from "./Reducers";
export default combineReducers({
  essentialismReducer,
  reducer,
});
