import React, { useState } from 'react';
import CalcOperationField from '../../components/Calculator/CalcOperationField';
import CalcInfoUser from '../../components/Calculator/CalcInfoUser';
import styles from './Calculator.module.scss';

const Calculator = () => {
    const [stepCalc, setStepCalc] = useState('Ввод данных');
    return (
        <div className={styles.calculator}>
            <CalcInfoUser stepCalc={stepCalc} />
            <CalcOperationField setStepCalc={setStepCalc} />
        </div>
    );
};

export default Calculator;
