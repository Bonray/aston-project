import React, { useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetHeroesQuery } from '../../store/heroesApiSlice';
import { ThemeContext } from '../../context/ThemeContext';
import CardsList from '../../components/Cards/CardsList/CardsList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import s from './HomePage.module.scss';

const HomePage = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;
  const [searchParams] = useSearchParams();

  const [page, setPage] = useState(searchParams.get('page') || 1);

  const filters = {
    page: searchParams.get('page') || 1,
    name: searchParams.get('name'),
    status: searchParams.get('status'),
    gender: searchParams.get('gender'),
  };
  
  const { data, isLoading, isSuccess, isError, error } = useGetHeroesQuery(filters);

  return (
    <section className={`${s.home} ${isModeDark ? `${s['home--dark']}` : `${s.home}`}`}>
      <div className={s.home__container}>
        <SearchBar setPage={setPage} />
        {isLoading && <Spinner />}
        {isError && <ErrorMessage>{error.error}</ErrorMessage>}
        {isSuccess && data.results.length > 0 &&
          <>
            <CardsList data={data} />
            <Pagination pages={data.info.pages} page={page} setPage={setPage} />
          </>
        }
      </div>
    </section>
  );
}

export default HomePage;