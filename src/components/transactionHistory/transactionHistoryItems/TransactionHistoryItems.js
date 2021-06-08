import React from "react";
import PropTypes from 'prop-types';
import css from "./TransactionHistoryItems.module.css";

const TransactionHistoryItems = ({ item }) => {
  return (
    <tr className={css.tr}>
      <td className={css.td}>{item.type}</td>
      <td className={css.td}>{item.amount}</td>
      <td className={css.td}>{item.currency}</td>
    </tr>
  );
};

TransactionHistoryItems.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};


export default TransactionHistoryItems;
