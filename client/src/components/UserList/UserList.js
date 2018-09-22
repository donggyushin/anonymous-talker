import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserList = () => {
  return <div className={cx("container")}>UserList Component</div>;
};

export default UserList;
