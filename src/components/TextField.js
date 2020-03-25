import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './TextField.module.scss';


const TextField = (props) => {
    const {
        type,
        id,
        className,
        placeholder,
        mode,
        disabled,
        onChange,
        value,
        ...attrs
    } = props;
    const TextFieldClasses = cn(styles.text_field, styles[`text_field--${mode}`], className);

    return (
        <label className={TextFieldClasses}>
            <input
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                className={styles.control}
                disabled={disabled}
                onChange={onChange}
                value={value}
                {...attrs}
            />
        </label>
    );
};

TextField.defaultProps = {
    type: 'text',
    className: '',
    placeholder: '',
    disabled: false,
    mode: '',
    onChange: () => {
    },
    value: '',
};

TextField.propTypes = {
    placeholder: PropTypes.string,
    mode: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default TextField;
