import { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from './../Statistics';
import Notifiation from './../../common/Notification/Notifiation';
import styled from 'styled-components';

const WrapperApp = styled.div`
  min-width: 300px;
  padding: 15px;
`;

class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeFeedback = e => {
    const option = e.target.dataset.option;

    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    const options = Object.keys(this.state);
    const isHaveOptions = good === 0 && bad === 0 && neutral === 0;

    return (
      <WrapperApp>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onChangeFeedback}
          />
        </Section>
        <Section title="Statistics">
          {isHaveOptions ? (
            <Notifiation message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={
                total !== 0 && good !== 0 ? positivePercentage : 0
              }
            />
          )}
        </Section>
      </WrapperApp>
    );
  }
}

export default App;
