import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useGetHeroQuery } from '../../store/heroesApiSlice';
import s from './HeroPage.module.scss';

const HeroPage = () => {
  const { heroId } = useParams();
  const { data: hero, isFetching, isSuccess, isError, error } = useGetHeroQuery(heroId);

  if (isFetching) return <Spinner />
  if (isError) return <ErrorMessage>{error.error}</ErrorMessage>
  if (isSuccess) {
    return (
      <section className={s.card}>
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
            
          </div>
        </div>
      </section>
    );
  }
}

export default HeroPage;