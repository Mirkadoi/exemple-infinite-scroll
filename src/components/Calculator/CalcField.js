import React from 'react';
import CalcSum from './Operation/CalcSum';
import styles from './CalcField.module.scss';

const CalcField = () => (
    <div className={styles.sum}>
        <CalcSum/>
    </div>
);

export default CalcField;
