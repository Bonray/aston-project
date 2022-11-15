import React from 'react';
import { Link } from 'react-router-dom';
import s from './CardsItem.module.scss';

const CardsItem = (props) => {
  return (
    <li className={s.cards__item}>
      <Link to={`/cards/${props.hero.id}`}>
        <img src={props.hero.image} alt={props.hero.name} className={s.cards__img} />
        <p className={s.cards__desc}>{props.hero.name}</p>
      </Link>
    </li>
  );
}

export default CardsItem;