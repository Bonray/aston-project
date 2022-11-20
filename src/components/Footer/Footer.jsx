import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import s from './Footer.module.scss';

const Footer = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <footer className={`${s.footer} ${isModeDark ? s['footer--dark'] : ''}`}>
      <div className={s.footer__container}>
        Copyright © 2022. Made by Azamat Rizvanov
      </div>
    </footer>
  );
}

export default Footer;