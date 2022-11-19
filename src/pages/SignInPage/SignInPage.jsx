import React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthForm from '../../components/AuthForm/AuthForm';
import s from './SignInPage.module.scss';

const SignInPage = () => {
  return (
    <section className={s['sign-in']}>      
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