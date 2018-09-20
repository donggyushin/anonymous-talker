//import
import axios from "axios";

//actions
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

//actions creators
export const login = displayName => ({
  type: LOGIN,
  displayName
});

export const logout = () => ({
  type: LOGOUT
});

//api action creators

//initial state
const initialState = {
  loggedIn: localStorage.getItem("displayName") ? true : false,
  displayName: localStorage.getItem("displayName")
    ? localStorage.getItem("displayName")
    : ""
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return applyLogin(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    default:
      return state;
  }
};

//reducer functions
const applyLogout = (state, action) => {
  localStorage.removeItem("displayName");
  return {
    ...state,
    loggedIn: false
  };
};

const applyLogin = (state, action) => {
  const { displayName } = action;
  localStorage.setItem("displayName", displayName);
  return {
    ...state,
    displayName,
    loggedIn: true
  };
};

export default reducer;
