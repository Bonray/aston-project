import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import s from './HistoryPage.module.scss';

const serialize = function(obj) {
  const str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }
  return str.join('&');
}

const HistoryPage = () => {
  const theme = useContext(ThemeContext);
  const { isModeDark } = theme.state;

  const history = useSelector(state => state.user.activeUser?.history) || [];
  console.log(history);

  return (
    <section className={`${s.history} ${isModeDark ? s['history--dark'] : ''}`}>
      <div className={s.history__container}>
        <h2 className={s.history__heading}>History of Your Queries</h2>
        {history.length === 0 &&
          <>
            <p className={s.history__text}>
              There is no history of your search queries so far.<br/>
              Maybe you should take a look at our collection first?
            </p>
            <Link className={s['history__link--large']} to="/">Go to the Main Page</Link>
          </>
        }
        {history.length > 0 && <ul className={s.history__list}>
          {history.map((item, idx) => 
            <li key={idx} className={s.history__item}>
              <Link to={`/?${serialize(item)}`} className={s.history__link}>
                <p>Query:</p>
                <ul>
                  <li>name: {item.name ? `${item.name}` : 'Not passed'}</li>
                  <li>status: {item.status ? item.status : 'Not passed'}</li>
                  <li>gender: {item.gender ? item.gender : 'Not passed'}</li>
                </ul>
              </Link>
            </li>
          )}
        </ul>}
      </div>
    </section>
  );
}

export default HistoryPage;