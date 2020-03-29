import React from 'react';
import CalcSum from './Operation/CalcSum';
import styles from './CalcOperationField.module.scss';

const CalcOperationField = () => (
    <div className={styles.calc_field}>
        <CalcSum/>
    </div>
);

export default CalcOperationField;
