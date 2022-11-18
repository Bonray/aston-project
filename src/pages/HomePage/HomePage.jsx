import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetHeroesQuery } from '../../store/heroesApiSlice';
import CardsList from '../../components/Cards/CardsList/CardsList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import s from './HomePage.module.scss';

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const [curPage, setCurPage] = useState(1);

  const filters = {
    page: curPage,
    name: searchParams.get('name'),
    status: searchParams.get('status'),
    gender: searchParams.get('gender'),
  };
  
  const { data, isLoading, isSuccess, isError, error } = useGetHeroesQuery(filters);

  return (
    <section className={s.home__container}>
      <SearchBar />
      {isLoading && <Spinner />}
      {isError && <ErrorMessage>{error.error}</ErrorMessage>}
      {isSuccess && data.results.length > 0 &&
        <>
          <CardsList data={data} />
          <Pagination pages={data.info.pages} page={curPage} setPage={setCurPage} />
        </>
      }
    </section>
  );
}

export default HomePage;