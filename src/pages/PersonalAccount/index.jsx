import { useState } from 'react';

import styles from './PersonalAccount.module.scss';
import avatar from '../../assets/img/avatar.png';
import { Pagination } from '../../components/Pagination';
import { CasesTable } from '../../components/CasesTable';
import { AccountEdit } from '../../components/AccountEdit';

export const PersonalAccount = () => {
  const [accountEditOpen, setAccountEditOpen] = useState(false);

  const [page, setPage] = useState(1);
  const limit = 5;

  const arr = [...Array(100)];

  const totalPage = Math.ceil(arr.length / limit);

  function handlePageChange(value) {
    if (value === '... ') {
      setPage(1);
    } else if (value === 'left') {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === 'right') {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === ' ...') {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  return (
    <div className={styles.lk}>
      <div className={styles.lkFirst}>
        <div className={styles.lkFirst__user}>
          <div className={styles.lkFirst__userRow}>
            <div className={styles.lkFirst__userRow__avatar}>
              <img src={avatar} alt="avatar" />
              <div className={styles.lkFirst__userRow__avatarEdit}>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.367 4.53596L14.0871 2.25604C14.0341 2.20304 13.9713 2.161 13.9021 2.13232C13.8329 2.10363 13.7587 2.08887 13.6838 2.08887C13.6089 2.08887 13.5347 2.10363 13.4656 2.13232C13.3964 2.161 13.3335 2.20304 13.2806 2.25604L6.44077 9.09582C6.38786 9.14879 6.3459 9.21167 6.3173 9.28087C6.28869 9.35006 6.274 9.42421 6.27405 9.49908V11.779C6.27405 11.9302 6.33411 12.0752 6.441 12.182C6.54789 12.2889 6.69287 12.349 6.84404 12.349H9.12397C9.19884 12.3491 9.27299 12.3344 9.34218 12.3058C9.41138 12.2771 9.47425 12.2352 9.52723 12.1823L16.367 5.34249C16.42 5.28955 16.462 5.22669 16.4907 5.1575C16.5194 5.0883 16.5342 5.01413 16.5342 4.93923C16.5342 4.86432 16.5194 4.79015 16.4907 4.72096C16.462 4.65176 16.42 4.5889 16.367 4.53596ZM8.88813 11.209H7.41402V9.73491L11.9739 5.17506L13.448 6.64917L8.88813 11.209ZM14.2538 5.84336L12.7797 4.36924L13.6838 3.46511L15.1579 4.93923L14.2538 5.84336ZM15.9638 8.9291V15.1989C15.9638 15.5012 15.8436 15.7912 15.6299 16.005C15.4161 16.2188 15.1261 16.3389 14.8238 16.3389H3.42414C3.12181 16.3389 2.83185 16.2188 2.61807 16.005C2.40428 15.7912 2.28418 15.5012 2.28418 15.1989V3.79926C2.28418 3.49692 2.40428 3.20697 2.61807 2.99319C2.83185 2.7794 3.12181 2.6593 3.42414 2.6593H9.69395C9.84512 2.6593 9.99009 2.71935 10.097 2.82624C10.2039 2.93313 10.2639 3.07811 10.2639 3.22928C10.2639 3.38045 10.2039 3.52543 10.097 3.63232C9.99009 3.73921 9.84512 3.79926 9.69395 3.79926H3.42414V15.1989H14.8238V8.9291C14.8238 8.77793 14.8838 8.63296 14.9907 8.52606C15.0976 8.41917 15.2426 8.35912 15.3938 8.35912C15.5449 8.35912 15.6899 8.41917 15.7968 8.52606C15.9037 8.63296 15.9638 8.77793 15.9638 8.9291Z"
                    fill="#285B4C"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.lkFirst__userRow__data}>
              <p className={styles.lkFirst__userRow__dataName}>
                successinclude
              </p>
              <p className={styles.lkFirst__userRow__dataItem}>
                +7 (928) 645 70 67
              </p>
              <p className={styles.lkFirst__userRow__dataItem}>
                manhhachkt08@gmail.com
              </p>
            </div>
          </div>
          <div
            className={styles.lkFirst__userAcc_edit}
            onClick={() => {
              setAccountEditOpen(true);
            }}
          >
            <p className={styles.lkFirst__userAcc_editText}>
              Редактировать профиль
            </p>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.367 4.53596L14.0871 2.25604C14.0341 2.20304 13.9713 2.161 13.9021 2.13232C13.8329 2.10363 13.7587 2.08887 13.6838 2.08887C13.6089 2.08887 13.5347 2.10363 13.4656 2.13232C13.3964 2.161 13.3335 2.20304 13.2806 2.25604L6.44077 9.09582C6.38786 9.14879 6.3459 9.21167 6.3173 9.28087C6.28869 9.35006 6.274 9.42421 6.27405 9.49908V11.779C6.27405 11.9302 6.33411 12.0752 6.441 12.182C6.54789 12.2889 6.69287 12.349 6.84404 12.349H9.12397C9.19884 12.3491 9.27299 12.3344 9.34218 12.3058C9.41138 12.2771 9.47425 12.2352 9.52723 12.1823L16.367 5.34249C16.42 5.28955 16.462 5.22669 16.4907 5.1575C16.5194 5.0883 16.5342 5.01413 16.5342 4.93923C16.5342 4.86432 16.5194 4.79015 16.4907 4.72096C16.462 4.65176 16.42 4.5889 16.367 4.53596ZM8.88813 11.209H7.41402V9.73491L11.9739 5.17506L13.448 6.64917L8.88813 11.209ZM14.2538 5.84336L12.7797 4.36924L13.6838 3.46511L15.1579 4.93923L14.2538 5.84336ZM15.9638 8.9291V15.1989C15.9638 15.5012 15.8436 15.7912 15.6299 16.005C15.4161 16.2188 15.1261 16.3389 14.8238 16.3389H3.42414C3.12181 16.3389 2.83185 16.2188 2.61807 16.005C2.40428 15.7912 2.28418 15.5012 2.28418 15.1989V3.79926C2.28418 3.49692 2.40428 3.20697 2.61807 2.99319C2.83185 2.7794 3.12181 2.6593 3.42414 2.6593H9.69395C9.84512 2.6593 9.99009 2.71935 10.097 2.82624C10.2039 2.93313 10.2639 3.07811 10.2639 3.22928C10.2639 3.38045 10.2039 3.52543 10.097 3.63232C9.99009 3.73921 9.84512 3.79926 9.69395 3.79926H3.42414V15.1989H14.8238V8.9291C14.8238 8.77793 14.8838 8.63296 14.9907 8.52606C15.0976 8.41917 15.2426 8.35912 15.3938 8.35912C15.5449 8.35912 15.6899 8.41917 15.7968 8.52606C15.9037 8.63296 15.9638 8.77793 15.9638 8.9291Z"
                fill="#285B4C"
              />
            </svg>
            {accountEditOpen && (
              <AccountEdit setAccountEditOpen={setAccountEditOpen} />
            )}
          </div>
        </div>
        <div className={styles.lkFirst__stats}>
          <div className={styles.lkFirst__statsItem}>
            <p className={styles.lkFirst__statsItem__title}>Создано проектов</p>
            <span className={styles.lkFirst__statsItem__count}>8</span>
            <button className={styles.lkFirst__statsItem__btn}>
              посмотреть последний
            </button>
          </div>
          <div className={styles.lkFirst__statsItem}>
            <p className={styles.lkFirst__statsItem__title}>
              Ожидают прогнозов
            </p>
            <span className={styles.lkFirst__statsItem__count}>5</span>
            <button className={styles.lkFirst__statsItem__btn}>
              посмотреть последний
            </button>
          </div>
          <div className={styles.lkFirst__statsItem}>
            <p className={styles.lkFirst__statsItem__title}>
              Завершенные проекты
            </p>
            <span className={styles.lkFirst__statsItem__count}>3</span>
            <button className={styles.lkFirst__statsItem__btn}>
              посмотреть последний
            </button>
          </div>
        </div>
      </div>
      <div className={styles.lkSecond}>
        <div className={styles.lkSecond__notifications}>
          <p className={styles.lkSecond__notificationsTitle}>
            Последние изменения
          </p>
          <ul className={styles.lkSecond__notificationsList}>
            <li className={styles.lkSecond__notificationsList__item}>
              <div className={styles.lkSecond__notificationsList__itemTop}>
                <p
                  className={styles.lkSecond__notificationsList__itemTop__text}
                >
                  Добро пожаловать!
                </p>
                <div
                  className={
                    styles.lkSecond__notificationsList__itemTop__circle
                  }
                ></div>
              </div>
              <p className={styles.lkSecond__notificationsList__itemDate}>
                07.07.2023
              </p>
            </li>
            <li className={styles.lkSecond__notificationsList__item}>
              <div className={styles.lkSecond__notificationsList__itemTop}>
                <p
                  className={styles.lkSecond__notificationsList__itemTop__text}
                >
                  Добавьте новый проект
                </p>
                <div
                  className={
                    styles.lkSecond__notificationsList__itemTop__circle
                  }
                ></div>
              </div>
              <p className={styles.lkSecond__notificationsList__itemDate}>
                07.07.2023
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.lkSecond__right}>
          <CasesTable />
          <Pagination
            totalPage={totalPage}
            page={page}
            limit={limit}
            siblings={1}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
