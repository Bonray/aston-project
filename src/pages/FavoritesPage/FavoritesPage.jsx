import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetFavoriteHeroesQuery } from "../../store/heroesApiSlice";
import CardsItem from "../../components/Cards/CardsItem/CardsItem";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";
import s from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.user.activeUser?.favorites) || [];

  const { data, isFetching, isSuccess, isError, error } = useGetFavoriteHeroesQuery(favorites);

  return (
    <section>
      <div className={s.favorites__container}>
        <h2 className={s.favorites__heading}>Favorites</h2>
        {isFetching && <Spinner />}
        {isError && <ErrorMessage>{error.error}</ErrorMessage>}
        {isSuccess && favorites.length > 0 &&
          <ul className={s.favorites__list}>
            {data.map(hero => <CardsItem key={hero.id} hero={hero} />)}
          </ul>
        }
        {isSuccess && favorites.length === 0 &&
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