import React, {
    useState,
    useEffect,
} from 'react';
import PropTypes from 'prop-types';
import CalcSum from './Operation/CalcSum';
import Button from '../Button';
import styles from './CalcOperationField.module.scss';

const CalcOperationField = ({ stepCalc, setStepCalc }) => {
    const [variable, setVariable] = useState({
        0: '',
        1: '',
    });

    const [blockNextStep, setBlockNextStep] = useState(true);

    const switchBlockNextStep = () => {
        if (variable[0] !== '' && variable[1] !== '') setBlockNextStep(false);
    };

    useEffect(() => {
        switchBlockNextStep();
    });

    return (
        <div className={styles.calc_field}>
            <div className={styles.operation_field}>
                <CalcSum
                    setTerms={setVariable}
                    terms={variable}
                    stepCalc={stepCalc}
                />
            </div>
            <div className={styles.button_group}>
                {stepCalc !== 1 && <Button className={styles.button}>Назад</Button>}
                <Button
                    disabled={blockNextStep}
                    className={styles.button}
                    onClick={() => setStepCalc(stepCalc + 1)}
                >Продолжить</Button>
            </div>
        </div>
    );
};

CalcOperationField.propTypes = {
    stepCalc: PropTypes.number.isRequired,
    setStepCalc: PropTypes.func.isRequired,
};

export default CalcOperationField;
