import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {friends.map((friend) => {
          return <FriendListItem friend={friend} key={friend.id} />;
        })}
      </ul>
    </div>
  );
};

export default FriendList;
