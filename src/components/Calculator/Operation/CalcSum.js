import React from 'react';
// import {
//     Column,
//     Table,
//     AutoSizer
// } from 'react-virtualized';
import PropTypes from 'prop-types';
import Button from '../../Button';
import TextField from '../../TextField';
import styles from './CalcSum.module.scss';


const CalcSum = ({ terms, setTerms, stepCalc }) => {
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
            {stepCalc === 1 && renderSumTextField()}
        </div>
    );
};

CalcSum.propTypes = {
    terms: PropTypes.object.isRequired,
    setTerms: PropTypes.func.isRequired,
    stepCalc: PropTypes.number.isRequired,
};

export default CalcSum;
