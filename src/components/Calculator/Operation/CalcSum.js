import React, { useState } from 'react';
// import {
//     Column,
//     Table,
//     AutoSizer
// } from 'react-virtualized';
import Button from '../../Button';
import TextField from '../../TextField';
import styles from './CalcSum.module.scss';


const CalcSum = () => {
    const [terms, setTerms] = useState({
        0: '',
        1: '',
    });

    const renderSumTextField = () => {
        const handleChange = ({ target: { value, id, validity: { valid } } }) => {
            if (valid) setTerms({ ...terms, [id]: value });
        };

        return (
            <>
                <Button
                    className={styles.button}
                    onClick={() => {
                        const lastKey = Object.keys(terms)[Object.keys(terms).length - 1];
                        setTerms({ ...terms, [+lastKey + 1]: '' });
                    }}
                >
                    Добавить слагаемое
                </Button>
                {terms
                && Object.entries(terms).map(([id, value]) => (
                    <div className={styles.field} key={id}>
                        <TextField
                            type="text"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            mode="small"
                            placeholder="Слагаемое"
                            onChange={handleChange}
                            value={value}
                            id={id}
                            required
                        />
                    </div>
                ))
                }
            </>
        );
    };

    return (
        <div className={styles.sum}>
            {renderSumTextField()}
        </div>
    );
};

export default CalcSum;
