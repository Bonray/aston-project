import React from 'react';
import c from './ErrorMessage.module.scss';

const ErrorMessage = (props) => {
  return (
    <p className={c.error}>{props.children}</p>
  )
}

export default ErrorMessage;