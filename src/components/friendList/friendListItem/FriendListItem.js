import React from "react";
import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: `${friend.isOnline ? "green" : "red"}` }}
      ></span>
      <img
        className={css.img}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.text}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

// FriendListItem.propTypes = {
//   friend: PropTypes.bool,
// }

export default FriendListItem;
