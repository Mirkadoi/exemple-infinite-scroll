import React, { useState } from 'react';
import CalcOperationField from '../../components/Calculator/CalcOperationField';
import CalcInfoUser from '../../components/Calculator/CalcInfoUser';
import styles from './Calculator.module.scss';

const operationStep = {
    1: 'Ввод данных',
    2: 'Подтверждение данных',
    3: 'Расчет',
    4: 'Результат',
};

const Calculator = () => {
    const [stepCalc, setStepCalc] = useState(1);
    return (
        <div className={styles.calculator}>
            <CalcInfoUser stepCalc={operationStep[stepCalc]} />
            <CalcOperationField
                stepCalc={stepCalc}
                setStepCalc={setStepCalc}
            />
        </div>
    );
};

export default Calculator;
