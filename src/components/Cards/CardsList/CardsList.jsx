import React from 'react';
import { useGetHeroesQuery } from '../../../store/heroesApiSlice';
import CardsItem from '../CardsItem/CardsItem';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import s from './CardsList.module.scss';

const CardsList = () => {
  const { data: heroes = [], isLoading, isSuccess, isError, error } = useGetHeroesQuery();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage>{error.error}</ErrorMessage>
  if (isSuccess) return (
    <ul className={c.cards__list}>
      {heroes.map(hero => <CardsItem key={hero.id} hero={hero} />)}
    </ul>
  );
}

export default CardsList;