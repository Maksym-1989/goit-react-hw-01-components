//===================================1111111=============================
import React from 'react';
import Friends from '../data/friend-list/friends.json';
import FriendList from './friendList/FriendList';
//====================================222222============================
import Profile from './profile/Profile';
import user from '../data/social-profile/user.json';
//=====================================33333================================
import Statistics from './statistics/Statistics';
import stats from '../data/statistics/statistical-data.json';
//=====================================444444================================
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from '../data/transaction-history/transactions.json';


const App = () => {
    return (<div className="container">
        <FriendList friends={Friends}/>
        <Profile  user={user} />
        <Statistics  title="Upload stats" stats={stats} />
        <TransactionHistory items={transactions}/>
    </div>)
}


export default App;