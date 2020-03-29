import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalcInfoUser.module.scss';


const CalcInfoUser = ({ stepCalc }) => {
    const login = localStorage.getItem('login');
    const matchResult = login.match(/(?<=@.).*(?=\.)/);
    const [partDomainName] = matchResult;

    const writeStars = () => {
        let str = '';
        for (let i = 0; i < partDomainName.length; i += 1) {
            str += '*';
        }

        return str;
    };

    const prependLogin = login.replace(`${partDomainName}`, writeStars);

    return (
        <div className={styles.info}>
            <p>Привет, {prependLogin}!</p>
            <p>Этап: "{stepCalc}"</p>
        </div>
    );
};

CalcInfoUser.propTypes = {
    stepCalc: PropTypes.string.isRequired,
};

export default CalcInfoUser;
