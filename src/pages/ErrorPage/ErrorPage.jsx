import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import s from './ErrorPage.module.scss';

const ErrorPage = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <section className={`${s.error} ${isModeDark ? s['error--dark'] : ''}`}>
      <div className={s.error__container}>
        <h2 className={s.error__heading}>Oops... The page you are looking for is not found😕</h2>
        <Link to="/" className={s.error__link}>Go to the main page</Link>
      </div>
    </section>
  );
}

export default ErrorPage;