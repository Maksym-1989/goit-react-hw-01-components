import React from "react";
import StatisticsItems from "./statisticItems/StatisticsItems";
import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.container}>
      <div className={css.card}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.list}>
          {stats.map((stat) => (
            <StatisticsItems stat={stat} key={stat.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
