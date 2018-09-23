//import
import axios from "axios";

//actions
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const GETUSERLIST = "user/USERLIST";

//actions creators
export const getUserList = userList => ({
  type: GETUSERLIST,
  userList
});

export const login = displayName => ({
  type: LOGIN,
  displayName
});

export const logout = () => ({
  type: LOGOUT
});

/***************************************************************************************** */
/* Async Action items using - Sockets													   */
/***************************************************************************************** */
// export const SocketGetUserList = socket => {
//   return dispatch => {
//     socket.on("receive displayName", userList => {
//       dispatch(getUserList(userList));
//     });
//   };
// };

//api action creators

//initial state
const initialState = {
  loggedIn: localStorage.getItem("displayName") ? true : false,
  displayName: localStorage.getItem("displayName")
    ? localStorage.getItem("displayName")
    : "",
  userList: []
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return applyLogin(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case GETUSERLIST:
      return applyGetUserList(state, action);
    default:
      return state;
  }
};

//reducer functions
const applyGetUserList = (state, action) => {
  const { userList } = action;
  return {
    ...state,
    userList
  };
};

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
