import React from 'react';
import PropTypes from 'prop-types';
import CalcSum from './Operation/CalcSum';
import Button from '../Button';
import styles from './CalcOperationField.module.scss';


const CalcOperationField = ({ stepCalc }) => (
    <div className={styles.calc_field}>
        <div className={styles.operation_field}>
            <CalcSum/>
        </div>
        <div className={styles.button_group}>
            {stepCalc !== 'Ввод данных' && <Button className={styles.button}>Назад</Button>}
            <Button className={styles.button}>Продолжить</Button>
        </div>
    </div>
);

CalcOperationField.propTypes = {
    stepCalc: PropTypes.string.isRequired,
};

export default CalcOperationField;
