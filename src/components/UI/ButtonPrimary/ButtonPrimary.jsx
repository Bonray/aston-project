import React from 'react';
import c from './ButtonPrimary.module.scss';

const ButtonPrimary = (props) => {
  return (
    <button className={c['btn--primary']} {...props}>
      {props.children}
    </button>
  );
}

export default ButtonPrimary;