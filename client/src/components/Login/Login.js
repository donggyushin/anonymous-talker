import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Login = ({
  handleInput,
  displayName,
  onClickButton,
  minute,
  hour,
  seconds
}) => {
  return (
    <div className={cx("container")}>
      <span className={cx("time")}>
        {hour >= 0 && hour < 10 ? "0" + hour : hour}:
        {minute >= 0 && minute < 10 ? "0" + minute : minute}:
        {seconds >= 0 && seconds < 10 ? "0" + seconds : seconds}
      </span>
      <span>우리는 어디다 마음을 털어놓아야 하나</span>
      <button onClick={onClickButton}>START!</button>
      <input
        type="text"
        onChange={handleInput}
        value={displayName}
        placeholder="닉네임을 입력해주세요. "
      />
    </div>
  );
};

export default Login;
