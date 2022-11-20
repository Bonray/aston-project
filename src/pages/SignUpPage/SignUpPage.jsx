import React, { useContext } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ThemeContext } from '../../context/ThemeContext';
import AuthForm from '../../components/AuthForm/AuthForm';
import s from './SignUpPage.module.scss';

const SignUpPage = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <section className={`${s['sign-up']} ${isModeDark ? s['sign-up--dark'] : ''}`}>
      <AuthForm
        title="Sign Up"
        message="Already have an account?"
        authType="signUp"
        linkTitle="Sign In"
        linkPath="/signIn"
        onSubmit={createUserWithEmailAndPassword}
      />
    </section>
  );
}

export default SignUpPage;