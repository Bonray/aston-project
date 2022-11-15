import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';
import ButtonPrimary from '../../components/UI/ButtonPrimary/ButtonPrimary';
import { useGetHeroQuery } from '../../store/heroesApiSlice';
import s from './HeroPage.module.scss';

const HeroPage = () => {
  const dispatch = useDispatch();
  
  const { heroId } = useParams();
  const { data: hero, isFetching, isSuccess, isError, error } = useGetHeroQuery(heroId);
  
  const favorites = useSelector(state => state.favorites);
  const isFavorite = !!favorites.find(hero => hero.id === heroId);

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
                <span>Role: </span>{hero.role}
              </li>
              <li className={s.card__item}>
                <span>Secondary: </span>{hero.secondary}
              </li>
              <li className={s.card__item}>
                <span>Diffilculty: </span>{hero.difficulty}/3
              </li>
              <li className={s.card__item}>
                <span>Description: </span>{hero.description}
              </li>
            </ul>

            {isFavorite
              ? <ButtonPrimary onClick={() => {dispatch(removeFavorite({ id: heroId }))}}>Remove from favorites</ButtonPrimary>
              : <ButtonPrimary onClick={() => {dispatch(addFavorite(hero))}}>Add to favorites</ButtonPrimary>
            }
            
          </div>
        </div>
      </section>
    );
  }
}

export default HeroPage;