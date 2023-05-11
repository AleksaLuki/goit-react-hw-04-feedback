import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css'
import React from 'react';

export function Notification({ message }) {
  return <p className={css.notifMessage}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
