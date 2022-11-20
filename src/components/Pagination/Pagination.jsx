import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import s from './Pagination.module.scss';

const Pagination = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  const changePageHandler = (curPageData) => {
    props.setPage(curPageData.selected + 1);
    searchParams.set('page', curPageData.selected + 1);
    setSearchParams(searchParams);
  }

  return (
    <ReactPaginate
      pageCount={props.pages}
      previousLabel="Prev"
      nextLabel="Next"
      containerClassName={s.pagination__container}
      pageLinkClassName={`${s.pagination__btn} ${isModeDark ? s['pagination__btn--dark'] : ''}`}
      disabledLinkClassName={s['pagination__btn--disabled']}
      activeLinkClassName={`${s['pagination__btn--active']} ${isModeDark ? s['pagination__btn--dark-active'] : ''}`}
      previousLinkClassName={s['pagination__btn--prev']}
      nextLinkClassName={s['pagination__btn--next']}
      breakClassName={s.pagination__break}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      forcePage={props.page - 1}
      onPageChange={changePageHandler}
    />
  );
}

export default Pagination;