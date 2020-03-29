import React from 'react';
// import {
//     Column,
//     Table,
//     AutoSizer
// } from 'react-virtualized';
import Button from '../../Button';
import TextField from '../../TextField';
import styles from './CalcSum.module.scss';

// const termsArr = [];

const CalcSum = () => {
    const renderSumTextField = () => (
        <>
            <Button className={styles.button}>Добавить слагаемое</Button>
            <div className={styles.field}>
                <TextField
                    mode="small"
                    placeholder="Слагаемое"
                    id={0}
                />
            </div>
            <div className={styles.field}>
                <TextField
                    mode="small"
                    placeholder="Слагаемое"
                    id={1}
                />
            </div>
        </>
    );

    return (
        <div className={styles.sum}>
            {renderSumTextField()}
        </div>
    );
};

export default CalcSum;
