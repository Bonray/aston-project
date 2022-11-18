import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import SearchFilters from './SearchFilters';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import useDebounce from '../../hooks/useDebounce';
import { API_URL, TIMEOUT_DELAY } from '../../config';
import s from './SearchBar.module.scss';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get('name') || '');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);
  const debouncedInputValue = useDebounce(inputValue, TIMEOUT_DELAY);

  const handleSumbit = (e) => {
    e.preventDefault();
    setSearchParams({ name: inputValue });
  }

  useEffect(() => {
    const fetchData = async function() {
      setError(null);
      const { data } = await axios.get(`${API_URL}/character`, {
        params: { name: debouncedInputValue }
      });
      return data.results.slice(0, 3);
    }

    if (!debouncedInputValue) setSuggestions([]);
    if (debouncedInputValue) {
      fetchData()
        .then(data => setSuggestions(data))
        .catch(() => {
          setSuggestions([]);
          setError('No matches found. Please, try something else.')
        });
    }
  }, [debouncedInputValue]);

  return (
    <div className={s.form__container}>
      <form onSubmit={handleSumbit} className={s.form__form}>
        <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} className={s.form__input} placeholder="Search..." />
        <ButtonPrimary type="submit">Search</ButtonPrimary>

        {error && <p className={s.form__error}>{error}</p>}
        {suggestions.length > 0 &&
          <ul className={s.form__list}>
             {suggestions.map(item => (
              <li key={item.id} className={s.form__item}>
                <Link to={`/cards/${item.id}`} className={s.form__link}>
                  <img src={item.image} alt={item.name} className={s.form__img} />
                  <p className={s.form__name}>{item.name}</p>
                </Link>
              </li>
             ))} 
          </ul>
        }
      </form>

      <SearchFilters />
    </div>
  );
}

export default SearchBar;