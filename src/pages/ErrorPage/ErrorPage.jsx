import React from 'react';
import { Link } from 'react-router-dom';
import c from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={c.error__container}>
      <h2 className={c.error__heading}>Oops... The page you are looking for is not found😕</h2>
      <Link to="/" className={c.error__link}>Go to the main page</Link>
    </div>
  );
}

export default ErrorPage;