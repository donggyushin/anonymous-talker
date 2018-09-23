import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "components/UserList/UserList";

class UserListContainer extends Component {
  render() {
    const { userList } = this.props;

    return <UserList userList={userList} />;
  }
}

const mapStateToProps = state => ({
  userList: state.user.userList
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
