import React from 'react';
import { Link } from 'react-router-dom';
import s from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.error__container}>
      <h2 className={s.error__heading}>Oops... The page you are looking for is not found😕</h2>
      <Link to="/" className={s.error__link}>Go to the main page</Link>
    </div>
  );
}

export default ErrorPage;