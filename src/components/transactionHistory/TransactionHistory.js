import React from 'react';
import TransactionHistoryItems from './transactionHistoryItems/TransactionHistoryItems';
const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => {
                return ( <TransactionHistoryItems item={item} key={item.id} /> )
            })}
        </tbody>
        </table>
    );
}

export default TransactionHistory;