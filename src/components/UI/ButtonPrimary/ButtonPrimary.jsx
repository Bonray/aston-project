import React from 'react';
import s from './ButtonPrimary.module.scss';

const ButtonPrimary = (props) => {
  return (
    <button className={s['btn--primary']} {...props}>
      {props.children}
    </button>
  );
}

export default ButtonPrimary;