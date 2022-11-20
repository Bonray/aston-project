import React, { useContext } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { ThemeContext } from '../../context/ThemeContext';
import AuthForm from '../../components/AuthForm/AuthForm';
import s from './SignInPage.module.scss';

const SignInPage = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <section className={`${s['sign-in']} ${isModeDark ? s['sign-in--dark'] : ''}`}>      
      <AuthForm
        title="Sign In"
        message="Don't have an account?"
        authType="signIn"
        linkTitle="Sign Up"
        linkPath="/signUp"
        onSubmit={signInWithEmailAndPassword}
      />
    </section>
  );
}

export default SignInPage;