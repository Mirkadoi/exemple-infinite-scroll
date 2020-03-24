import React from 'react';
import {
    Link,
} from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';


const Button = (props) => {
    const {
        type,
        children,
        className,
        onClick,
        disabled,
        mode,
        to,
        ...attrs
    } = props;

    if (type === 'link') {
        return (
            <Link
                to={to}
                type="button"
                className={cn(
                    styles.button_reset,
                    styles.button,
                    styles[`button--${type}`],
                    styles[`button--${mode}`],
                    className,
                )}
                disabled={disabled}
                onClick={onClick}
                {...attrs}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className={cn(
                styles.button_reset,
                styles.button,
                styles[`button--${mode}`],
                className,
            )}
            disabled={disabled}
            onClick={onClick}
            {...attrs}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: <></>,
    disabled: false,
    mode: '',
    type: '',
    to: '/',
    className: '',
    onClick: () => {},
};

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    mode: PropTypes.string,
    type: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
