import React from 'react';
import CardsList from '../../components/Cards/CardsList/CardsList';
import SearchForm from '../../components/SearchForm/SearchForm';
import c from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={c.home__container}>
      <SearchForm className={c.home__form} />
      <CardsList/>
    </section>
  );
}

export default HomePage;