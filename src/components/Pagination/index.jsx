import styles from './Pagination.module.scss';
import { Link } from 'react-router-dom';

import { returnPaginationRange } from '../../utils/appUtils';

export const Pagination = ({
  totalPage,
  page,
  limit,
  siblings,
  onPageChange,
}) => {
  let array = returnPaginationRange(totalPage, page, limit, siblings);

  return (
    <ul className={styles.pagination}>
      <li className={styles.paginationArrow}>
        <Link
          className={styles.paginationArrow__link}
          onClick={() => {
            onPageChange('left');
          }}
          href="#"
          aria-label="Previous"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.79484 7.42C4.71277 7.33803 4.66661 7.22682 4.6665 7.11083V6.88916C4.66785 6.77342 4.71382 6.66267 4.79484 6.58L7.79317 3.5875C7.84794 3.53228 7.92248 3.50122 8.00025 3.50122C8.07802 3.50122 8.15257 3.53228 8.20734 3.5875L8.6215 4.00166C8.67637 4.05542 8.7073 4.12901 8.7073 4.20583C8.7073 4.28265 8.67637 4.35623 8.6215 4.41L6.02567 7L8.6215 9.59C8.67672 9.64476 8.70778 9.71931 8.70778 9.79708C8.70778 9.87485 8.67672 9.9494 8.6215 10.0042L8.20734 10.4125C8.15257 10.4677 8.07802 10.4988 8.00025 10.4988C7.92248 10.4988 7.84794 10.4677 7.79317 10.4125L4.79484 7.42Z"
              fill="#285B4C"
            />
          </svg>
        </Link>
      </li>
      {array.map(value => {
        if (value === page) {
          return (
            <li className={styles.paginationItem}>
              <Link className={styles.paginationActive__link} href="#">
                {value}
              </Link>
            </li>
          );
        } else {
          return (
            <li className={styles.paginationItem}>
              <Link
                className={styles.paginationItem__link}
                onClick={() => {
                  onPageChange(value);
                }}
                href="#"
              >
                {value}
              </Link>
            </li>
          );
        }
      })}
      <li className={styles.paginationArrow}>
        <Link
          className={styles.paginationArrow__link}
          onClick={() => {
            onPageChange('right');
          }}
          href="#"
          aria-label="Next"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.20516 7.42C9.28723 7.33803 9.33339 7.22682 9.3335 7.11083V6.88916C9.33215 6.77342 9.28618 6.66267 9.20516 6.58L6.20683 3.5875C6.15206 3.53228 6.07752 3.50122 5.99975 3.50122C5.92198 3.50122 5.84743 3.53228 5.79266 3.5875L5.3785 4.00166C5.32363 4.05542 5.29271 4.12901 5.29271 4.20583C5.29271 4.28265 5.32363 4.35623 5.3785 4.41L7.97433 7L5.3785 9.59C5.32328 9.64476 5.29222 9.71931 5.29222 9.79708C5.29222 9.87485 5.32328 9.9494 5.3785 10.0042L5.79266 10.4125C5.84743 10.4677 5.92198 10.4988 5.99975 10.4988C6.07752 10.4988 6.15206 10.4677 6.20683 10.4125L9.20516 7.42Z"
              fill="#285B4C"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};
