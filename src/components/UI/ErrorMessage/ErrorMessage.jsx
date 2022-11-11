import React from 'react';
import s from './ErrorMessage.module.scss';

const ErrorMessage = (props) => {
  return (
    <p className={s.error}>{props.children}</p>
  )
}

export default ErrorMessage;