import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import s from './Spinner.module.scss';

const Spinner = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <div className={`${s['spinner-wrapper']} ${isModeDark ? s['spinner-wrapper--dark'] : ''}`}>
      <div className={s.spinner}></div>
    </div>
  );
}

export default Spinner;