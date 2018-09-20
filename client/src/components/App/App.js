import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "components/Login/LoginContainer";
import NavigationVarContainer from "components/NavigationVar/NavigationVarContainer";
import ChatContainer from "components/Chat/ChatContainer";

const cx = classNames.bind(styles);

const App = ({ loggedIn }) => {
  return (
    <div className={cx("container")}>
      {loggedIn ? <PrivateComponent /> : <PublicComponent />}
    </div>
  );
};

const PublicComponent = () => (
  <div className={cx("public")}>
    <LoginContainer />
  </div>
);

const PrivateComponent = () => (
  <div className={cx("private")}>
    <NavigationVarContainer />
    <ChatContainer />
  </div>
);

export default App;
