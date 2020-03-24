import React from 'react';
import Button from '../../components/Button';
import styles from './Main.module.scss';

const Main = () => (
    <div className={styles.root}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Добро пожаловать!
            </h1>
            <div className={styles.description}>
                Данный сайт сделан для вычесление суммы сложения.
            </div>
            <Button
                type="link"
                to="/calculator"
            >
                Авторизоваться
            </Button>
        </div>
    </div>
);

export default Main;
