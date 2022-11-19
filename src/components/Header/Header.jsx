import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { removeUser } from '../../store/userSlice';
import { removeAuth } from '../../store/authSlice';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const onSignOut = () => {
    dispatch(removeUser());
    dispatch(removeAuth());
  }

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <Link to="/">
          <img src={logo} alt="Overwatch Logo" className={s.header__logo} />
        </Link>
        <nav>
          <ul className={s.nav__list}>
            {
              !isAuth &&
              <>              
                <li className={s.nav__item}>
                  <NavLink className={s.nav__link} to="signIn">Sign In</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink className={s.nav__link} to="signUp">Sign Up</NavLink>
                </li>
              </>
            }
            {
              isAuth &&
              <>              
                <li className={s.nav__item}>
                  <NavLink className={s.nav__link} to="favorites">Favorites</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink className={s.nav__link} to="history">History</NavLink>
                </li>
                <li className={s.nav__item}>
                  <ButtonPrimary onClick={onSignOut}>Sign Out</ButtonPrimary>
                </li>
              </>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;