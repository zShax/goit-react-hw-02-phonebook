import React from 'react';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span
              data-isOnline={friend.isOnline}
              className={styles.status}
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
