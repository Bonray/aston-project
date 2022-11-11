import React from 'react';
import CardsList from '../../components/Cards/CardsList/CardsList';
import SearchForm from '../../components/SearchForm/SearchForm';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={s.home__container}>
      <SearchForm className={s.home__form} />
      <CardsList/>
    </section>
  );
}

export default HomePage;