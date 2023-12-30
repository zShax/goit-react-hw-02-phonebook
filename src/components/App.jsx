import React from 'react';

// Styles
import styles from './App.module.css';

// Profile
import Profile from './Profile/Profile';
import user from './Profile/user.json';

// Statistics
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

// FriendList
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

// TransactionHistory
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <section className={styles.container}>
      <article className={styles.containerChild}>
        <h3>Profile</h3>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <h3>Statistics</h3>
        <Statistics title="upload stats" stats={data} />
      </article>

      <article className={styles.containerChild}>
        <h3>Friend List</h3>
        <FriendList friends={friends} />
      </article>

      <article className={styles.containerChild}>
        <h3>Transaction History</h3>
        <TransactionHistory items={transactions} />
      </article>
    </section>
  );
};
