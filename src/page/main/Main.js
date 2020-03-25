import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import styles from './Main.module.scss';
import FormAuth from '../../components/Authorization/FormAuth';

const renderPreview = (isAuth, switchStepAuth) => (
    <>
        <h1 className={styles.title}>
            Добро пожаловать!
        </h1>
        <div className={styles.description}>
            Данный сайт сделан для вычесление суммы сложения.
        </div>
        {
            isAuth
                ? (
                    <Button
                        type="link"
                        to="/calculator"
                    >
                        Вернуться к вычислениям
                    </Button>
                )
                : (
                    <Button
                        onClick={() => switchStepAuth(false)}
                    >
                        Авторизоваться
                    </Button>
                )
        }

    </>
);

const renderAuth = () => (
    <>
        <h1 className={styles.title}>
            Аутентификация
        </h1>
        <FormAuth />
    </>
);

const Main = ({ isAuth }) => {
    const [renderStepAuth, switchStepAuth] = useState(true);
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {
                    renderStepAuth ? renderPreview(isAuth, switchStepAuth) : renderAuth()
                }
            </div>
        </div>
    );
};

Main.propTypes = {
    isAuth: PropTypes.bool.isRequired,
};

export default Main;
