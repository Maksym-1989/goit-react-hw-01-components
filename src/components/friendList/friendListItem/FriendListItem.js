import React from 'react';
// import PropTypes from 'prop-types';

const FriendListItem = ({friend}) => {
return (
    <li className="item">
        <span className="status" style={{backgroundColor: 'green' }}></span>
        <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p className="name">{friend.name}</p>
    </li>
    )
};


// FriendListItem.propTypes = {
//     avatar: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
// };

// style={isOnline ? "backgroundColor: 'green'" : "backgroundColor: 'red'" } width="10" height="10"
export default FriendListItem;