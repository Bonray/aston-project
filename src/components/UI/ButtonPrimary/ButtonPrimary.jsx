import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import s from './ButtonPrimary.module.scss';

const ButtonPrimary = (props) => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <button className={`${s['btn--primary']} ${isModeDark ? s['btn--primary-dark'] : ''}`} {...props}>
      {props.children}
    </button>
  );
}

export default ButtonPrimary;