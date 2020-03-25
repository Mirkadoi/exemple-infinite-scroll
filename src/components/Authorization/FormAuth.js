import React, { useState } from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './FormAuth.module.scss';

const FormAuth = () => {
    const [formValue, setFormValue] = useState({
        nameValue: '',
        passwordValue: '',
    });
    // const [formError, setFormError] = useState('');
    const { nameValue, passwordValue } = formValue;

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <form className={styles.form}>
            <TextField
                id="name"
                placeholder="Логин"
                value={nameValue}
                onChange={({ target: { value } }) => (
                    setFormValue({ ...formValue, nameValue: value })
                )}
            />
            <TextField
                type="password"
                id="password"
                placeholder="Пароль"
                value={passwordValue}
                onChange={({ target: { value } }) => (
                    setFormValue({ ...formValue, passwordValue: value })
                )}
            />
            <Button
                type='submit'
                disabled
                onClick={handleClick}
            >
                Войти
            </Button>
        </form>
    );
};

export default FormAuth;
