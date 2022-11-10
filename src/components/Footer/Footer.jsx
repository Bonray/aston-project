import React from 'react';
import c from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={c.footer}>
      <div className={c.footer__container}>
        Copyright © 2022. Made by Azamat Rizvanov
      </div>
    </footer>
  );
}

export default Footer;