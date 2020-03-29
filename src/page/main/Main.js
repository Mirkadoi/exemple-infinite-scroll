import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import FormAuth from '../../components/Authorization/FormAuth';
import styles from './Main.module.scss';

const Main = ({ isAuth, switchIsAuth }) => {
    const [renderStepAuth, switchStepAuth] = useState(true);

    const renderPreview = () => (
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
            <FormAuth switchIsAuth={switchIsAuth}/>
        </>
    );

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                {
                    renderStepAuth ? renderPreview(isAuth) : renderAuth(switchIsAuth)
                }
            </div>
        </div>
    );
};

Main.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    switchIsAuth: PropTypes.func.isRequired,
};

export default Main;
