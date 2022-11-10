import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useGetHeroQuery } from '../../store/heroesApiSlice';
import c from './HeroPage.module.scss';

const CardPage = () => {
  const { heroId } = useParams();
  const { data: hero, isFetching, isSuccess, isError, error } = useGetHeroQuery(heroId);

  if (isFetching) return <Spinner />
  if (isError) return <ErrorMessage>{error.error}</ErrorMessage>
  if (isSuccess) {
    return (
      <section className={c.card}>
        <div className={c.card__container}>
          <h2 className={c.card__title}>{hero.name}</h2>

          <div className={c.card__info}>
            <img src={hero.image} alt={hero.name} className={c.card__img}/>

            <ul className={c.card__list}>
              <li className={c.card__item}>
                <span>Role: </span>{hero.role}
              </li>
              <li className={c.card__item}>
                <span>Secondary: </span>{hero.secondary}
              </li>
              <li className={c.card__item}>
                <span>Diffilculty: </span>{hero.difficulty}/3
              </li>
              <li className={c.card__item}>
                <span>Description: </span>{hero.description}
              </li>
            </ul>
            
          </div>
        </div>
      </section>
    );
  }
}

export default CardPage;