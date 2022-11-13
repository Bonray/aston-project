import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import HeroPage from './pages/HeroPage/HeroPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cards/:heroId" element={<HeroPage/>}/>
        <Route path="/signIn" element={<SignInPage/>}/>
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
