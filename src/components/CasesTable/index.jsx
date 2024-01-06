import { useState, useRef, useEffect } from 'react';

import styles from './CasesTable.module.scss';
import { FilterCasesTable } from '../FilterCasesTable';

export const CasesTable = () => {
  const [dateFilterOpen, setDateFilterOpen] = useState(false);
  const [nameFilterOpen, setNameFilterOpen] = useState(false);
  const [partFilterOpen, setPartFilterOpen] = useState(false);
  const [locationFilterOpen, setLocationFilterOpen] = useState(false);

  const dateFilterRef = useRef();
  const nameFilterRef = useRef();
  const partFilterRef = useRef();
  const locationFilterRef = useRef();

  useEffect(() => {
    const handleClickDateFilterOutside = event => {
      if (!event.composedPath().includes(dateFilterRef.current)) {
        setDateFilterOpen(false);
      }
    };
    const handleClickNameFilterOutside = event => {
      if (!event.composedPath().includes(nameFilterRef.current)) {
        setNameFilterOpen(false);
      }
    };
    const handleClickPartFilterOutside = event => {
      if (!event.composedPath().includes(partFilterRef.current)) {
        setPartFilterOpen(false);
      }
    };
    const handleClickLocationFilterOutside = event => {
      if (!event.composedPath().includes(locationFilterRef.current)) {
        setLocationFilterOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickDateFilterOutside);
    document.body.addEventListener('click', handleClickNameFilterOutside);
    document.body.addEventListener('click', handleClickPartFilterOutside);
    document.body.addEventListener('click', handleClickLocationFilterOutside);
    return () => {
      document.body.removeEventListener('click', handleClickDateFilterOutside);
      document.body.removeEventListener('click', handleClickNameFilterOutside);
      document.body.removeEventListener('click', handleClickPartFilterOutside);
      document.body.removeEventListener(
        'click',
        handleClickLocationFilterOutside
      );
    };
  });

  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHead__item}>
          <th
            className={styles.tableHead__item1}
            onClick={() => {
              setDateFilterOpen(true);
            }}
            ref={dateFilterRef}
          >
            <p>Дата</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_88_10590)">
                <path
                  d="M8.33333 14.1667C8.33333 14.6269 8.70643 15 9.16667 15H10.8333C11.2936 15 11.6667 14.6269 11.6667 14.1667C11.6667 13.7064 11.2936 13.3333 10.8333 13.3333H9.16667C8.70643 13.3333 8.33333 13.7064 8.33333 14.1667ZM3.33333 5C2.8731 5 2.5 5.3731 2.5 5.83333C2.5 6.29357 2.8731 6.66667 3.33333 6.66667H16.6667C17.1269 6.66667 17.5 6.29357 17.5 5.83333C17.5 5.3731 17.1269 5 16.6667 5H3.33333ZM5 10C5 10.4602 5.3731 10.8333 5.83333 10.8333H14.1667C14.6269 10.8333 15 10.4602 15 10C15 9.53976 14.6269 9.16667 14.1667 9.16667H5.83333C5.3731 9.16667 5 9.53976 5 10Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_88_10590">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {dateFilterOpen && <FilterCasesTable atLeft={true} />}
          </th>
          <th
            className={styles.tableHead__item2}
            onClick={() => {
              setNameFilterOpen(true);
            }}
            ref={nameFilterRef}
          >
            <p>Название</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_88_10590)">
                <path
                  d="M8.33333 14.1667C8.33333 14.6269 8.70643 15 9.16667 15H10.8333C11.2936 15 11.6667 14.6269 11.6667 14.1667C11.6667 13.7064 11.2936 13.3333 10.8333 13.3333H9.16667C8.70643 13.3333 8.33333 13.7064 8.33333 14.1667ZM3.33333 5C2.8731 5 2.5 5.3731 2.5 5.83333C2.5 6.29357 2.8731 6.66667 3.33333 6.66667H16.6667C17.1269 6.66667 17.5 6.29357 17.5 5.83333C17.5 5.3731 17.1269 5 16.6667 5H3.33333ZM5 10C5 10.4602 5.3731 10.8333 5.83333 10.8333H14.1667C14.6269 10.8333 15 10.4602 15 10C15 9.53976 14.6269 9.16667 14.1667 9.16667H5.83333C5.3731 9.16667 5 9.53976 5 10Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_88_10590">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {nameFilterOpen && <FilterCasesTable atLeft={true} />}
          </th>
          <th
            className={styles.tableHead__item3}
            onClick={() => {
              setPartFilterOpen(true);
            }}
            ref={partFilterRef}
          >
            <p>Сторона</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_88_10590)">
                <path
                  d="M8.33333 14.1667C8.33333 14.6269 8.70643 15 9.16667 15H10.8333C11.2936 15 11.6667 14.6269 11.6667 14.1667C11.6667 13.7064 11.2936 13.3333 10.8333 13.3333H9.16667C8.70643 13.3333 8.33333 13.7064 8.33333 14.1667ZM3.33333 5C2.8731 5 2.5 5.3731 2.5 5.83333C2.5 6.29357 2.8731 6.66667 3.33333 6.66667H16.6667C17.1269 6.66667 17.5 6.29357 17.5 5.83333C17.5 5.3731 17.1269 5 16.6667 5H3.33333ZM5 10C5 10.4602 5.3731 10.8333 5.83333 10.8333H14.1667C14.6269 10.8333 15 10.4602 15 10C15 9.53976 14.6269 9.16667 14.1667 9.16667H5.83333C5.3731 9.16667 5 9.53976 5 10Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_88_10590">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {partFilterOpen && <FilterCasesTable atLeft={true} />}
          </th>
          <th
            className={styles.tableHead__item4}
            onClick={() => {
              setLocationFilterOpen(true);
            }}
            ref={locationFilterRef}
          >
            <p>Место</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_88_10590)">
                <path
                  d="M8.33333 14.1667C8.33333 14.6269 8.70643 15 9.16667 15H10.8333C11.2936 15 11.6667 14.6269 11.6667 14.1667C11.6667 13.7064 11.2936 13.3333 10.8333 13.3333H9.16667C8.70643 13.3333 8.33333 13.7064 8.33333 14.1667ZM3.33333 5C2.8731 5 2.5 5.3731 2.5 5.83333C2.5 6.29357 2.8731 6.66667 3.33333 6.66667H16.6667C17.1269 6.66667 17.5 6.29357 17.5 5.83333C17.5 5.3731 17.1269 5 16.6667 5H3.33333ZM5 10C5 10.4602 5.3731 10.8333 5.83333 10.8333H14.1667C14.6269 10.8333 15 10.4602 15 10C15 9.53976 14.6269 9.16667 14.1667 9.16667H5.83333C5.3731 9.16667 5 9.53976 5 10Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_88_10590">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {locationFilterOpen && <FilterCasesTable atRight={true} />}
          </th>
          <th className={styles.tableHead__item5}>
            <p>Выиграно</p>
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        <tr className={styles.tableBody__item}>
          <td className={styles.tableBody__item1}>07.07.23</td>
          <td className={styles.tableBody__item2}>Заключение договора...</td>
          <td className={styles.tableBody__item3}>Истец</td>
          <td className={styles.tableBody__item4}>Ростов-на-Дону</td>
          <td className={styles.tableBody__item5}></td>
        </tr>
      </tbody>
    </table>
  );
};
