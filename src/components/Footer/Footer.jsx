import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        Copyright © 2022. Made by Azamat Rizvanov
      </div>
    </footer>
  );
}

export default Footer;