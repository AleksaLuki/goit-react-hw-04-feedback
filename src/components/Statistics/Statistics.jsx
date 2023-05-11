import propTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'
import React from 'react'

export function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
    <div className={css.statisticContainer}>
    <p className={css.statisticName}>Good:{good}</p>
    <p className={css.statisticName}>Neutral:{neutral}</p>
    <p className={css.statisticName}>Bad:{bad}</p>
    <p className={css.statisticName}>Total:{total}</p>
    <p className={css.statisticName}>Positive feedback:{positivePercentage}%</p>
    </div>
  )
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};