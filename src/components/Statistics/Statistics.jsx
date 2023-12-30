import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title = '', stats }) => {
  // Only render the h2 if it has a value, and always in uppercase
  // Reusable header
  let headerValue = '';
  if (title) {
    headerValue = <h2 className={styles.title}> {title.toUpperCase()} </h2>;
  }

  return (
    <div className={styles.container}>
      {headerValue}
      <ul className={styles.statList}>
        {stats.map(statistic => (
          <li key={statistic.id} className={styles.item}>
            <span className={styles.label}>{statistic.label}</span>
            <span className={styles.percentage}>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
