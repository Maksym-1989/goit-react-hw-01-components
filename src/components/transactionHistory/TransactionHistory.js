import React from "react";
import TransactionHistoryItems from "./transactionHistoryItems/TransactionHistoryItems";
import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr className={css.tr}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return <TransactionHistoryItems item={item} key={item.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};


export default TransactionHistory;
