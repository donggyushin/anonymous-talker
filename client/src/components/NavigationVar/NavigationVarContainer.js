import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationVar from "components/NavigationVar/NavigationVar";
import * as userActions from "store/modules/user";

class NavigationVarContainer extends Component {
  _clickLogout = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    return <NavigationVar clickLogout={this._clickLogout} />;
  }
}

const mapStateToProps = state => ({
  myNickName: state.user.displayName
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationVarContainer);
