import React, { useState } from 'react';
import styles from './FeedbackForm.module.css';

// Statistics
import Statistics from './statisticsDisplay/Statistics';
// Feedback Options
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
// Notification
import Notification from './notification/Notification';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total ? (good / total) * 100 : 0;

  if (total === 0) {
    return (
      <div className={styles.container}>
        <h2>Please Leave Feedback</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />

        <h2>Statistics</h2>
        <Notification message="No feedback given yet!" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Please Leave Feedback</h2>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />

      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default FeedbackForm;
