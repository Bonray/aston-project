import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import c from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.header__container}>
        <Link to="/">
          <img src={logo} alt="Overwatch Logo" className={c.header__logo} />
        </Link>
        <nav>
          <ul className={c.nav__list}>
            <li>
              <NavLink className={c.nav__link} to="sign-in">Sign In</NavLink>
            </li>
            <li>
              <NavLink className={c.nav__link} to="sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;