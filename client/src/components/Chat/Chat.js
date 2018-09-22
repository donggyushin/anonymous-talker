import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
let counter = 1;

const Chat = ({ message, handleInput, onClickEnter, chatLogs }) => {
  return (
    <ul {...this.props} className={cx("container")}>
      <div className={cx("chatLog")}>
        <div className={cx("text")}>
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
    </ul>
  );
};

const ChatItem = ({ displayName, message }) => {
  return (
    <div className={cx("chatItemContainer")}>
      <span className={cx("username")}>{displayName}</span>
      <span className={cx("message")}>{message}</span>
    </div>
  );
};

export default Chat;
