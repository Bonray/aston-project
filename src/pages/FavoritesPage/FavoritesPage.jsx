import React from "react";
import { useSelector } from "react-redux";
import CardsItem from "../../components/Cards/CardsItem/CardsItem";
import s from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <section>
      <div className={s.favorites__container}>
        <h2 className={s.favorites__heading}>Favorites</h2>
        <ul className={s.favorites__list}>
          {favorites.map(hero => <CardsItem key={hero.id} hero={hero} />)}
        </ul>
      </div>
    </section>
  );
}

export default FavoritesPage;