import React, { Component } from "react";
import { connect } from "react-redux";
import Chat from "components/Chat/Chat";
import io from "socket.io-client";
import autoScroll from "autoscroll-react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

import * as chatActions from "store/modules/chat";
import * as userActions from "store/modules/user";

const cx = classNames.bind(styles);
let counter = 1;

let socket;

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messagesEnd: null
    };

    socket = io.connect("http://localhost:8080");

    socket.on("receive message", (displayName, message) => {
      const { receiveMessage } = this.props;
      receiveMessage(displayName, message);
    });

    socket.on("receive displayName", userList => {
      const { getUserList } = this.props;
      getUserList(userList);
    });

    socket.on("error message", message => {
      alert(message);
      this.props.logout();
    });

    //접속하면 server에 displayName 을 먼저 보내줌.
    socket.emit("send displayName", this.props.myNickName);
  }

  componentWillUnmount() {
    socket.emit("user leave", this.props.myNickName);
    socket.disconnect(this.props.myNickName);
  }

  scrollToBottom = () => {
    const scrollHeight = this.text.scrollHeight;
    const height = this.text.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.text.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  onClickEnter = event => {
    const key = event.key;
    const { apiSendMessage } = this.props;
    const { message } = this.state;

    if (key === "Enter") {
      apiSendMessage(socket, message);
      this.setState({
        ...this.state,
        message: ""
      });
    }
  };

  onClickSubmitButton = () => {
    const { apiSendMessage } = this.props;
    const { message } = this.state;

    apiSendMessage(socket, message);
    this.setState({
      ...this.state,
      message: ""
    });
  };

  handleInput = event => {
    const value = event.target.value;
    this.setState({
      message: value
    });
  };

  render() {
    const { message } = this.state;
    const { chatLogs, myNickName } = this.props;
    const { handleInput, onClickEnter, onClickSubmitButton } = this;
    return (
      // <Chat
      //   message={message}
      //   chatLogs={chatLogs}
      //   handleInput={handleInput}
      //   onClickEnter={onClickEnter}
      // />
      <div className={cx("container")}>
        <div className={cx("chatLog")}>
          <div
            className={cx("text")}
            ref={div => {
              this.text = div;
            }}
          >
            {chatLogs.map(chat => (
              <ChatItem key={counter++} {...chat} myNickName={myNickName} />
            ))}
          </div>
        </div>
        <div className={cx("input")}>
          <textarea
            className={cx("message")}
            onChange={handleInput}
            value={message}
            type="text"
            onKeyPress={onClickEnter}
          />
          <button onClick={onClickSubmitButton}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

const ChatItem = ({ displayName, message, myNickName }) => {
  return (
    <div className={displayName === myNickName ? cx("my") : cx("other")}>
      <span className={cx("username")}>{displayName}</span>
      <span className={cx("message")}>{message}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  chatLogs: state.chat.chatLogs,
  myNickName: state.user.displayName
});

const mapDispatchToProps = dispatch => ({
  apiSendMessage: (socket, message) =>
    dispatch(chatActions.apiSendMessage(socket, message)),
  receiveMessage: (displayName, message) =>
    dispatch(chatActions.receiveMessage(displayName, message)),
  getUserList: userList => dispatch(userActions.getUserList(userList)),
  logout: () => dispatch(userActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(autoScroll(ChatContainer));
