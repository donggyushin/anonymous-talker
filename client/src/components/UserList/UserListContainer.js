import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "components/UserList/UserList";

class UserListContainer extends Component {
  render() {
    return <UserList />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
