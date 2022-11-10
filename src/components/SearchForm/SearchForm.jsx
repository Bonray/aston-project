import ButtonPrimary from '../../components/UI/ButtonPrimary/ButtonPrimary';
import c from './SearchForm.module.scss';

const SearchForm = (props) => {
  return (
    <form className={`c.form ${props.className}`}>
      <input type="text" className={c.form__input} placeholder="Search..." />
      <ButtonPrimary type="submit">Search</ButtonPrimary>
    </form>
  );
}

export default SearchForm;