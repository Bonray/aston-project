import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import s from './Switch.module.scss';

const Switch = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  const changeHandler = () => {
    if (isModeDark) theme.dispatch({ type: "LIGHT_MODE" });
    else theme.dispatch({ type: "DARK_MODE" });
  }

  return (
    <label className={s.switch}>
      <input className={s.switch__input} type="checkbox" onChange={changeHandler}/>
      <span className={s.switch__slider}/>
    </label>
  )
}

export default Switch;