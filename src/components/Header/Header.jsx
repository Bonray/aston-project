import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <Link to="/">
          <img src={logo} alt="Overwatch Logo" className={s.header__logo} />
        </Link>
        <nav>
          <ul className={s.nav__list}>
            <li>
              <NavLink className={s.nav__link} to="sign-in">Sign In</NavLink>
            </li>
            <li>
              <NavLink className={s.nav__link} to="sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;