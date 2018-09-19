import React, { Component } from "react";
import { connect } from "react-redux";
import App from "components/App/App";

class AppContainer extends Component {
  render() {
    return <App />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
