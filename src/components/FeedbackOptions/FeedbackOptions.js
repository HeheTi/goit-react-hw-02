import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  text-transform: capitalize;
  padding: 4px;
  min-width: 80px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 10px;
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(elem => (
        <Button key={elem} onClick={onLeaveFeedback} data-option={elem}>
          {elem}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
