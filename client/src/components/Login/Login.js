import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Login = ({ handleInput, displayName, onClickButton }) => {
  return (
    <div className={cx("container")}>
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
