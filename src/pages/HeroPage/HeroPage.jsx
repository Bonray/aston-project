import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';
import ButtonPrimary from '../../components/UI/ButtonPrimary/ButtonPrimary';
import { useGetHeroQuery } from '../../store/heroesApiSlice';
import useAuth from '../../hooks/useAuth';
import s from './HeroPage.module.scss';

const HeroPage = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const { heroId } = useParams();
  const { data: hero, isFetching, isSuccess, isError, error } = useGetHeroQuery(heroId);
  
  const favorites = useSelector(state => state.favorites);
  const isFavorite = !!favorites.find(hero => hero.id === +heroId);

  const { isAuth } = useAuth();

  const dispatchRemoveHandler = () => {
    if (!isAuth) navigate('/signIn');
    else dispatch(removeFavorite({ id: heroId }));
  }

  const dispatchAddHandler = () => {
    if (!isAuth) navigate('/signIn');
    else dispatch(addFavorite(hero));
  }

  if (isFetching) return <Spinner />
  if (isError) return <ErrorMessage>{error.error}</ErrorMessage>
  if (isSuccess) {
    return (
      <section>
        <div className={s.card__container}>
          
          <h2 className={s.card__title}>{hero.name}</h2>

          <div className={s.card__info}>
            <img src={hero.image} alt={hero.name} className={s.card__img}/>

            <ul className={s.card__list}>
              <li className={s.card__item}>
                <span>Species: </span>{hero.species}
              </li>
              <li className={s.card__item}>
                <span>Status: </span>{hero.status}
              </li>
              <li className={s.card__item}>
                <span>Gender: </span>{hero.gender}
              </li>
              <li className={s.card__item}>
                <span>Origin: </span>{hero.origin.name}
              </li>
              <li className={s.card__item}>
                <span>Location: </span>{hero.location.name}
              </li>
            </ul>

            {isFavorite
              ? <ButtonPrimary onClick={dispatchRemoveHandler}>Remove from favorites</ButtonPrimary>
              : <ButtonPrimary onClick={dispatchAddHandler}>Add to favorites</ButtonPrimary>
            }
            
          </div>
        </div>
      </section>
    );
  }
}

export default HeroPage;