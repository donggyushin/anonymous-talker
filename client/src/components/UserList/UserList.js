import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserList = ({ userList }) => {
  return (
    <div className={cx("container")}>
      <span className={cx("title")}>USERLIST</span>
      <div className={cx("body")}>
        {userList.map(user => (
          <UserListItem key={user.id} username={user.userListItem} />
        ))}
      </div>
    </div>
  );
};

const UserListItem = username => {
  return (
    <div className={cx("userListItemContainer")}>
      <span className={cx("userListItem")}>{username.username}</span>
    </div>
  );
};

export default UserList;
