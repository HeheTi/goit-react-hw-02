import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
