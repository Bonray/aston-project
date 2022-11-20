import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeContext';
import s from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <p className={`${s.error} ${isModeDark ? s['error--dark'] : ''}`}>{message}</p>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}

export default ErrorMessage;