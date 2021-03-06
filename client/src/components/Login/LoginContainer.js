import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "components/Login/Login";
import * as userActions from "store/modules/user";

class LoginContainer extends Component {
  state = {
    displayName: "",
    hour: "",
    minute: "",
    seconds: ""
  };

  componentDidMount() {
    setInterval(() => {
      var d = new Date();
      this.setState({
        ...this.state,
        hour: d.getHours(),
        minute: d.getMinutes(),
        seconds: d.getSeconds()
      });
    }, 1000);
  }

  _timerStart = () => {};

  _handleInput = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      displayName: value
    });
  };

  _onClickButton = () => {
    const { login } = this.props;
    const { displayName } = this.state;
    login(displayName);
  };

  render() {
    const { displayName, hour, minute, seconds } = this.state;
    return (
      <Login
        handleInput={this._handleInput}
        displayName={displayName}
        onClickButton={this._onClickButton}
        minute={minute}
        hour={hour}
        seconds={seconds}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: displayName => dispatch(userActions.login(displayName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
