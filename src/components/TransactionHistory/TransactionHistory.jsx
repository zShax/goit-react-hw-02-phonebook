import React from 'react';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  let labels = Object.keys(items[0]);

  return (
    <div className={styles.container}>
      <table className={styles.transactionHistory}>
        <thead className={styles.tableHeads}>
          <tr className={styles.tableHeadsRows}>
            <th>{labels[1].toUpperCase()}</th>
            <th>{labels[2].toUpperCase()}</th>
            <th>{labels[3].toUpperCase()}</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {items.map(item => (
            <tr className={styles.tableBodyRow} key={item.id}>
              <td>{capitalizeFirstLetter(item.type)}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>

        <span className={styles.transactionHistorySeparators}></span>
      </table>
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default TransactionHistory;
