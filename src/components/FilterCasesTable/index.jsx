import { useEffect, useRef, useState } from 'react';
import styles from './FilterCasesTable.module.scss';

export const FilterCasesTable = ({ atLeft = false, atRight = false }) => {
  const filterPositionRef = useRef(null);

  useEffect(() => {
    if (atLeft) {
      filterPositionRef.current.style.left = '0';
    } else if (atRight) {
      filterPositionRef.current.style.right = '0';
    }
  }, []);

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className={styles.filter} ref={filterPositionRef}>
      <label className={styles.filterSearch}>
        <input
          className={styles.filterSearch__input}
          type="text"
          placeholder="Поиск..."
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
        />
        {inputSearch && (
          <div
            className={styles.filterSearch__clear}
            onClick={() => setInputSearch('')}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_86_24910)">
                <path
                  d="M7.9991 1.33374C4.31248 1.33374 1.33252 4.3137 1.33252 8.00033C1.33252 11.6869 4.31248 14.6669 7.9991 14.6669C11.6857 14.6669 14.6657 11.6869 14.6657 8.00033C14.6657 4.3137 11.6857 1.33374 7.9991 1.33374ZM11.3324 10.3936L10.3924 11.3336L7.9991 8.94031L5.6058 11.3336L4.66581 10.3936L7.05912 8.00033L4.66581 5.60702L5.6058 4.66703L7.9991 7.06034L10.3924 4.66703L11.3324 5.60702L8.93909 8.00033L11.3324 10.3936Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </g>
              <defs>
                <clipPath id="clip0_86_24910">
                  <rect width="15.9998" height="15.9998" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </label>
      <div className={styles.filterHint}>Фильтр</div>
      <ul className={styles.filterList}>
        <li className={styles.filterList__item}>
          <div className={styles.filterList__itemIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_86_24950)">
                <path
                  d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </g>
              <defs>
                <clipPath id="clip0_86_24950">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className={styles.filterList__itemName}>Название фильтра...</p>
          <p className={styles.filterList__itemCount}>k фильтра</p>
        </li>
      </ul>
    </div>
  );
};
