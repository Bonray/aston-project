import ButtonPrimary from '../../components/UI/ButtonPrimary/ButtonPrimary';
import s from './SearchForm.module.scss';

const SearchForm = (props) => {
  return (
    <form className={`s.form ${props.className}`}>
      <input type="text" className={s.form__input} placeholder="Search..." />
      <ButtonPrimary type="submit">Search</ButtonPrimary>
    </form>
  );
}

export default SearchForm;