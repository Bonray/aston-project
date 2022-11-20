import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Spinner from './components/UI/Spinner/Spinner';

const HeroPage = React.lazy(() => import('./pages/HeroPage/HeroPage'));
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const FavoritesPage = React.lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const HistoryPage = React.lazy(() => import('./pages/HistoryPage/HistoryPage'));

const App = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cards/:heroId" element={<HeroPage/>}/>
          <Route path="/signIn" element={<SignInPage/>}/>
          <Route path="/signUp" element={<SignUpPage/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/favorites/" element={<FavoritesPage/>}/>
            <Route path="/history/" element={<HistoryPage/>}/>
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
