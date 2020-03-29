import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalcInfoUser.module.scss';


const CalcInfoUser = ({ stepCalc }) => {
    const login = localStorage.getItem('login');
    return (
        <div className={styles.info}>
            <p>Привет, {login}!</p>
            <p>Этап: "{stepCalc}"</p>
        </div>
    );
};

CalcInfoUser.propTypes = {
    stepCalc: PropTypes.string.isRequired,
};

export default CalcInfoUser;
