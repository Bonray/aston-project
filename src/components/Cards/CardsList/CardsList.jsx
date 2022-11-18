import React from 'react';
import CardsItem from '../CardsItem/CardsItem';
import s from './CardsList.module.scss';

const CardsList = (props) => {
  return (
    <ul className={s.cards__list}>
      {props.data.results.map(hero => <CardsItem key={hero.id} hero={hero} />)}
    </ul>
  );
}

export default CardsList;