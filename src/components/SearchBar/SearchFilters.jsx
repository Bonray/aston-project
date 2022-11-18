import React from "react";
import { useSearchParams } from "react-router-dom";
import s from './SearchFilters.module.scss';

const SearchFilters = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleStatusChange = (e) => {
    const value = e.target.value;
    searchParams.set('page', 1);
    props.setPage(1);
    
    if (!value) searchParams.delete('status');
    else searchParams.set('status', value);

    setSearchParams(searchParams);
  }

  const handleGenderChange = (e) => {
    const value = e.target.value;
    searchParams.set('page', 1);
    props.setPage(1);
    
    if (!value) searchParams.delete('gender');
    else searchParams.set('gender', value);

    setSearchParams(searchParams);
  }

  return (
    <div className={s.filters}>
      <label htmlFor="status" className={s.filters__label}>
        Status:
        <select id="status" defaultValue={searchParams.get('status') || ""} className={s.filters__select} onChange={handleStatusChange}>
          <option value="" className={s.filters__option}>None</option>
          <option value="alive" className={s.filters__option}>Alive</option>
          <option value="dead" className={s.filters__option}>Dead</option>
          <option value="unknown" className={s.filters__option}>Unknown</option>
        </select>
      </label>
      <label htmlFor="gender" className={s.filters__label}>
        Gender:
        <select id="gender" defaultValue={searchParams.get('gender') || ""} className={s.filters__select} onChange={handleGenderChange}>
          <option value="" className={s.filters__option}>None</option>
          <option value="male" className={s.filters__option}>Male</option>
          <option value="female" className={s.filters__option}>Female</option>
          <option value="unknown" className={s.filters__option}>Unknown</option>
        </select>
      </label>
    </div>
  );
}

export default SearchFilters