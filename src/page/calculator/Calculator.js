import React from 'react';
import CalcField from '../../components/Calculator/CalcField';
import CalcInfoUser from '../../components/Calculator/CalcInfoUser';
import styles from './Calculator.module.scss';

const Calculator = () => (
    <div className={styles.calculator}>
        <CalcInfoUser/>
        <CalcField />
    </div>
);

export default Calculator;
