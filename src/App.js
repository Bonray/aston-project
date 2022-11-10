import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HeroPage from './pages/HeroPage/HeroPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cards/:heroId" element={<HeroPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
