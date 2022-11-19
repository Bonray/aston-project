import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from '../../components/AuthForm/AuthForm';
import s from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <section className={s['sign-up']}>
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