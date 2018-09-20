import React, { Component } from "react";
import { connect } from "react-redux";
import App from "components/App/App";

class AppContainer extends Component {
  render() {
    const { loggedIn } = this.props;
    return <App loggedIn={loggedIn} />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
