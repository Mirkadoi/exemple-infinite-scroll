import React from 'react';
import {
    List,
    AutoSizer,
} from 'react-virtualized';
import PropTypes from 'prop-types';
import Button from '../../Button';
import TextField from '../../TextField';
import styles from './CalcSum.module.scss';


const CalcSum = ({ terms, setTerms, stepCalc }) => {
    const infiniteLoaderConfig = {
        listHeight: 500,
        listRowHeight: 60,
    };

    const {
        listHeight,
        listRowHeight,
    } = infiniteLoaderConfig;

    const termsArr = Object.entries(terms);

    const renderSumTextField = () => {
        const handleChange = ({ target: { value, id, validity: { valid } } }) => {
            if (valid) setTerms({ ...terms, [id]: value });
        };

        const setPlaceholder = (id) => {
            if (id !== '0' && id !== '1') return 'Слагаемое';
            return 'Слагаемое (обязательное)';
        };

        const handleClick = () => {
            const lastKey = Object.keys(terms)[Object.keys(terms).length - 1];
            setTerms({ ...terms, [+lastKey + 1]: '' });
        };

        const noRowsRenderer = () => (<div>Нет элементов</div>);

        const rowRenderer = ({ index, style }) => {
            const [id, value] = termsArr[index];

            return (
                <div
                    key={id}
                    style={style}
                >
                    <TextField
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        mode="fixed-h"
                        placeholder={setPlaceholder(id)}
                        onChange={handleChange}
                        value={value}
                        id={id}
                        required
                    />
                </div>
            );
        };

        return (
            <>
                <Button
                    className={styles.button}
                    onClick={handleClick}
                >
                    Добавить слагаемое
                </Button>
                <div>
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <List
                                height={listHeight}
                                noRowsRenderer={noRowsRenderer}
                                rowCount={termsArr.length}
                                rowHeight={listRowHeight}
                                rowRenderer={rowRenderer}
                                width={width}
                            />
                        )}
                    </AutoSizer>
                </div>
            </>
        );
    };

    return (
        <div className={styles.sum}>
            {stepCalc === 1 && renderSumTextField()}
        </div>
    );
};

CalcSum.defaultProps = {
    index: 0,
    style: {},
};

CalcSum.propTypes = {
    terms: PropTypes.object.isRequired,
    style: PropTypes.object,
    setTerms: PropTypes.func.isRequired,
    stepCalc: PropTypes.number.isRequired,
    index: PropTypes.number,
};

export default CalcSum;
