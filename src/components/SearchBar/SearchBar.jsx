import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addHistory } from "../../store/userSlice";
import axios from 'axios';
import SearchFilters from './SearchFilters';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import useDebounce from '../../hooks/useDebounce';
import { API_URL, TIMEOUT_DELAY } from '../../config';
import s from './SearchBar.module.scss';

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get('name') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [gender, setGender] = useState(searchParams.get('gender') || '');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionsListShown, setIsSuggestionsListShown] = useState(false);
  const [error, setError] = useState(null);

  const debouncedInputValue = useDebounce(inputValue, TIMEOUT_DELAY);

  const collectSearchParamsData = () => {
    const res = {};
    for (const [key, value] of searchParams.entries()) {
      res[key] = value;
    }
    return res;
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsSuggestionsListShown(false);

    searchParams.set('page', 1);
    props.setPage(1);
    
    if (!status) searchParams.delete('status');
    else searchParams.set('status', status);

    if (!gender) searchParams.delete('gender');
    else searchParams.set('gender', gender);

    if (!inputValue) searchParams.delete('name');
    else searchParams.set('name', inputValue);

    dispatch(addHistory(collectSearchParamsData()));
    setSearchParams(searchParams);
  }

  useEffect(() => {
    const fetchData = async function() {
      setError(null);
      const { data } = await axios.get(`${API_URL}/character`, {
        params: { name: debouncedInputValue }
      });
      return data.results.slice(0, 3);
    }

    if (!debouncedInputValue) {
      setSuggestions([]);
      setError(null);
    };
    if (debouncedInputValue) {
      fetchData()
        .then(data => setSuggestions(data))
        .catch(() => {
          setSuggestions([]);
          setError('No matches found. Please, try looking for something else.')
        });
    }
  }, [debouncedInputValue]);

  return (
    <div className={s.form__container}>
      <SearchFilters setPage={props.setPage} setStatus={setStatus} setGender={setGender} />
      <form onSubmit={handleSumbit} className={s.form__form}>
        <input
          type="text"
          value={inputValue}
          className={s.form__input}
          placeholder="Search..."
          onChange={(e) => {setInputValue(e.target.value)}}
          onFocus={() => setIsSuggestionsListShown(true)}
        />
        <ButtonPrimary type="submit">Search</ButtonPrimary>

        {error && <p className={s.form__error}>{error}</p>}
        {suggestions.length > 0 && isSuggestionsListShown &&
          <ul className={s.form__list} onMouseLeave={() => setIsSuggestionsListShown(false)}>
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
    </div>
  );
}

export default SearchBar;