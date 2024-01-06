import styles from './Support.module.scss';

export const Support = ({ setSupportOpen }) => {
  return (
    <div className={styles.support}>
      <form className={styles.supportBlock}>
        <div
          className={styles.supportBlock__close}
          onClick={() => {
            setSupportOpen(false);
          }}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_88_9470)">
              <path
                d="M12 2.5C6.47 2.5 2 6.97 2 12.5C2 18.03 6.47 22.5 12 22.5C17.53 22.5 22 18.03 22 12.5C22 6.97 17.53 2.5 12 2.5ZM17 16.09L15.59 17.5L12 13.91L8.41 17.5L7 16.09L10.59 12.5L7 8.91L8.41 7.5L12 11.09L15.59 7.5L17 8.91L13.41 12.5L17 16.09Z"
                fill="#285B4C"
              />
            </g>
            <defs>
              <clipPath id="clip0_88_9470">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className={styles.supportBlock__title}>Служба поддержки</h3>
        <textarea
          className={styles.supportBlock__text}
          placeholder="Напишите ваш вопрос..."
          required
        ></textarea>
        <input
          className={styles.supportBlock__email}
          type="email"
          placeholder="Почта для ответа"
          required
        />
        <button className={styles.supportBlock__btn}>Отправить</button>
      </form>
    </div>
  );
};
