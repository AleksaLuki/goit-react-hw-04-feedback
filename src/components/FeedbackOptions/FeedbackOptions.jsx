import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'
import React from 'react';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.container}>
      {options.map(item => {
        return (
          <button className={css.fbBtn} key={item} name={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};