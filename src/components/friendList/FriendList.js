import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";
import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};


export default FriendList;
