import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import s from './CardsItem.module.scss';

const CardsItem = (props) => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  return (
    <li className={s.cards__item}>
      <Link to={`/cards/${props.hero.id}`}>
        <img src={props.hero.image} alt={props.hero.name} className={s.cards__img} />
        <p className={`${s.cards__desc} ${isModeDark ? s['cards__desc--dark'] : ''}`}>{props.hero.name}</p>
      </Link>
    </li>
  );
}

export default CardsItem;