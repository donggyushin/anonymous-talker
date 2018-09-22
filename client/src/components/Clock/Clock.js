import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Clock = ({ hours, seconds, minutes }) => {
  return (
    <div className={cx("container")}>
      <span className={cx("time")}>
        {hours >= 0 && hours < 10 ? "0" + hours : hours} :
        {minutes >= 0 && minutes < 10 ? "0" + minutes : minutes} :
        {seconds >= 0 && seconds < 10 ? "0" + seconds : seconds}
      </span>
    </div>
  );
};

export default Clock;
