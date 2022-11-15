import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth } from "firebase/auth";
import { setUser } from '../../store/userSlice';
import s from './AuthForm.module.scss';

const AuthForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Both input fields must be filled out!');
    } else {
      const auth = getAuth();
      props.authFunc(auth, email, password)
        .then(({ user }) => {
          dispatch(setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          }));
          navigate('/');
        })
        .catch((err) => {
          setError(err.message.replace('Firebase: ', ''));
        });
    }
  }

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <h2 className={s.form__heading}>{props.title}</h2>

      <label htmlFor="email" className={s.form__label}>
        <p>Email</p>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className={s.form__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label htmlFor="password" className={s.form__label}>
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className={s.form__input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit" className={s.form__btn}>{props.title}</button>
      
      <div className={s.form__info}>
        {error && <p className={s.form__error}>{error}</p>}
        <p className={s.form__text}>{props.message}</p>
        <Link to={props.linkPath} className={s.form__link}>{props.linkTitle}</Link>
      </div>
    </form>
  );
}

export default AuthForm;