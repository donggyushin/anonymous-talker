import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavigationVar = ({ clickLogout }) => {
  return (
    <div className={cx("container")}>
      <span onClick={clickLogout}>logout</span>
    </div>
  );
};

export default NavigationVar;
