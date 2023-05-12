import { useState } from 'react'

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
   return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if(!total) {
      return 0
    }
   return Math.round((good / total) * 100)
  };

  const onLeaveFeedback = (evt) => {
    const name = evt.target.name;

    switch (name) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
        default:
        break;
    }
   
  };

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];

    return (
      <div>
      <Section title = 'Please leave feedback'>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
          {total ? 
          <Statistics good={good} 
                      neutral={neutral} 
                      bad={bad} 
                      total={countTotalFeedback()} 
                      positivePercentage={countPositiveFeedbackPercentage()} />: <Notification message='No feedback given'/> }
        </Section>
      </div>
    )
  }


