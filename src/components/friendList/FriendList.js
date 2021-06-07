import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';

const FriendList = ({friends}) => {
    return ( 
    <ul>
        {friends.map(friend => {
            return (<FriendListItem friend={friend} key={friend.id} />)
        })}
    </ul>
        
    );
}

export default FriendList;