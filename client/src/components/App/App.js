import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";

const cx = classNames.bind(styles);

const App = () => {
  return <div className={cx("container")}>App Component</div>;
};

export default App;
