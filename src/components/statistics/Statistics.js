import React from "react";
import StatisticsItems from "./statisticItems/StatisticsItems";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.container}>
      <div className={css.card}>
        {title ? <h2 className={css.title}>{title}</h2> : <></>}

        <ul className={css.list}>
          {stats.map((stat) => (
            <StatisticsItems stat={stat} key={stat.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

// Statistics.defaultProps = {
//   title: <></>,
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
