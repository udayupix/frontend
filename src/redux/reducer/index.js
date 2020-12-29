import { combineReducers } from "redux";
import catsReducer from "./catsReducer";
import postReducer from "./postReducer";
import hompoRedcuer from "./hompoRedcuer";

export default function allReducers() {
  return combineReducers({
    cats: catsReducer,
    posts: postReducer,
    homposts: hompoRedcuer,
  });
}
