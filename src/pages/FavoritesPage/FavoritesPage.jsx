import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardsItem from "../../components/Cards/CardsItem/CardsItem";
import s from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <section>
      <div className={s.favorites__container}>
        <h2 className={s.favorites__heading}>Favorites</h2>
        {favorites.length > 0 &&
          <ul className={s.favorites__list}>
            {favorites.map(hero => <CardsItem key={hero.id} hero={hero} />)}
          </ul>
        }
        {favorites.length === 0 &&
          <>
            <p className={s.favorites__text}>
              You don't have any favorite cards yet.<br/>
              Maybe you should take a look at our collection first?
            </p>
            <Link className={s.favorites__link} to="/">Go to the Main Page</Link>
          </>
        } 
      </div>
    </section>
  );
}

export default FavoritesPage;