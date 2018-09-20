//import

//actions
const RECEIVE_MESSAGE = "chat/RECEIVE_MESSAGE";

//action creators

export const receiveMessage = (displayName, message) => ({
  type: RECEIVE_MESSAGE,
  displayName,
  message
});

/***************************************************************************************** */
/* Async Action items using - Sockets													   */
/***************************************************************************************** */
export const apiSendMessage = (socket, message) => {
  return (dispatch, getState) => {
    const {
      user: { displayName }
    } = getState();
    console.log(getState());
    socket.emit("send message", displayName, message);
  };
};

//initial state
const initialState = {
  chatLogs: []
};
//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return applyReceiveMessage(state, action);
    default:
      return state;
  }
};

//reducer actions

const applyReceiveMessage = (state, action) => {
  const { displayName, message } = action;
  return {
    ...state,
    chatLogs: [
      ...state.chatLogs,
      {
        displayName,
        message
      }
    ]
  };
};

//export
export default reducer;
