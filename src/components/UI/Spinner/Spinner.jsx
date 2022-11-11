import React from 'react';
import s from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={s['spinner-wrapper']}>
      <div className={s.spinner}></div>
    </div>
  );
}

export default Spinner;