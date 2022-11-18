import React from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import s from './Pagination.module.scss';

const Pagination = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

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
      pageLinkClassName={s.pagination__btn}
      disabledLinkClassName={s['pagination__btn--disabled']}
      activeLinkClassName={s['pagination__btn--active']}
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