import React, { useState } from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './FormAuth.module.scss';

const FormAuth = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        password: '',
    });
    // const [formError, setFormError] = useState('');
    const [inValidForm, setInValidForm] = useState(true);

    const { name, password } = formValue;

    const changeTextField = ({ target: { value, id } }) => (
        setFormValue({ ...formValue, [id]: value })
    );

    const validateTextField = (e) => {
        console.log(e.target.value);
        setInValidForm(false);
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <form className={styles.form}>
            <TextField
                id="name"
                placeholder="Логин"
                value={name}
                onChange={changeTextField}
                onBlur={validateTextField}

            />
            <TextField
                type="password"
                id="password"
                placeholder="Пароль"
                value={password}
                onChange={changeTextField}
                onBlur={validateTextField}
            />
            <Button
                type='submit'
                disabled={inValidForm}
                onClick={handleClick}
            >
                Войти
            </Button>
        </form>
    );
};

export default FormAuth;
