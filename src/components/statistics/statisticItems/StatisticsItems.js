import React from "react";
import PropTypes from 'prop-types';
import css from "./StatisticsItems.module.css";

const StatisticsItems = ({ stat }) => {
  function randomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})
    `;
  }

  return (
    <li className={css.list_item} style={{ backgroundColor: randomColor() }}>
      <span className={css.list_item_text}>{stat.label}</span>
      <span className={css.list_item_number}>{stat.percentage}</span>
    </li>
  );
};

StatisticsItems.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};


export default StatisticsItems;
