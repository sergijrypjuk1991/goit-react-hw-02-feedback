import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const add = good + neutral + bad
    if (add === 0) {
      return 0;
    } 
    const percentage = (good / add) * 100;
    return Math.round(percentage) 
  };
 
    
  handleIncrementFeedback = event => {
    const nameFeedback = event.currentTarget.name;
    this.setState(prevState => {
      return { [nameFeedback]: prevState[nameFeedback] + 1 };
    });
  };
  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
  return (

    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}

      className="section"
    >
      <Section title="Please, leave your feedback">
          <FeedbackOptions
            options = {options}
            onLeaveFeedback={this.handleIncrementFeedback}
          />
      </Section> 

      <Section title="Statistics">
        { total !==0 ?
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          /> : 
          <NotificationMessage message="There is no feedback" />
        }
      </Section> 
    </div>
  );
    };
};

