import React from 'react';
import c from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={c['spinner-wrapper']}>
      <div className={c.spinner}></div>
    </div>
  );
}

export default Spinner;