import { combineReducers } from "redux";
import test from "./test";
import user from "./user";
import chat from "./chat";

export default combineReducers({
  test,
  user,
  chat
});
