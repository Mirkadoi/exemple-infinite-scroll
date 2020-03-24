import React from 'react';
import styles from './Main.module.scss';

const Main = () => (
    <div className={styles.root}>
        <div className={styles.wrapper}>
            <h1>
                Добро пожаловать!
            </h1>
            <div>
                Данный сайт сделан для вычесление суммы сложения.
            </div>
            <div>
                Данный сайт сделан для вычесление суммы сложения.
            </div>
        </div>
    </div>
);

export default Main;
