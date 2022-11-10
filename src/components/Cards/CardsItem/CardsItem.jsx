import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AddToFavoriteIcon } from '../../../assets/images/add-to-favorites.svg';
import c from './CardsItem.module.scss';

const CardsItem = (props) => {
  return (
    <li className={c.cards__item}>
      <Link to={`/cards/${props.hero.id}`}>
        <button type="button" className={c.cards__btn}>
          <AddToFavoriteIcon className={c.cards__icon} />
        </button>
        <img src={props.hero.image} alt={props.hero.name} className={c.cards__img} />
        <p className={c.cards__desc}>{props.hero.name}</p>
      </Link>
    </li>
  );
}

export default CardsItem;