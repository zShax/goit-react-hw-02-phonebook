import React from 'react';

// Styles
// import styles from './App.module.css';

// Feedback Form
import FeedbackForm from './feedbackForm/FeedbackForm';

// Section
import Section from './section/Section';

export const App = () => {
  return (
    <Section>
      <FeedbackForm />
    </Section>
  );
};
