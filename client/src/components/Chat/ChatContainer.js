import React, { Component } from "react";
import { connect } from "react-redux";
import Chat from "components/Chat/Chat";
import io from "socket.io-client";
import autoScroll from "autoscroll-react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

import * as chatActions from "store/modules/chat";

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
  }

  componentWillUnmount() {
    socket.disconnect();
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

  handleInput = event => {
    const value = event.target.value;
    this.setState({
      message: value
    });
  };

  render() {
    const { message } = this.state;
    const { chatLogs } = this.props;
    const { handleInput, onClickEnter } = this;
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
              <ChatItem key={counter++} {...chat} />
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
          <button>SUBMIT</button>
        </div>
      </div>
    );
  }
}

const ChatItem = ({ displayName, message }) => {
  return (
    <div className={cx("chatItemContainer")}>
      <span>{displayName}</span>
      <span>{message}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  chatLogs: state.chat.chatLogs
});

const mapDispatchToProps = dispatch => ({
  apiSendMessage: (socket, message) =>
    dispatch(chatActions.apiSendMessage(socket, message)),
  receiveMessage: (displayName, message) =>
    dispatch(chatActions.receiveMessage(displayName, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(autoScroll(ChatContainer));
