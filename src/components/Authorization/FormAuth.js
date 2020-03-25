import React, { useState } from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './FormAuth.module.scss';

const FormAuth = () => {
    const [formValue, setFormValue] = useState({
        mail: '',
        password: '',
    });
    const [formError, setFormError] = useState({
        mailError: '',
        passwordError: '',
    });
    const [inValidForm, setInValidForm] = useState(true);

    const { mail, password } = formValue;
    const { mailError, passwordError } = formError;

    const changeTextField = ({ target: { value, id } }) => {
        setFormValue({ ...formValue, [id]: value });
        setFormError({ ...formError, [`${id}Error`]: '' });
    };

    const validateAllTextField = () => {
        const allFieldValid = !mailError && !passwordError && mail && password;
        if (allFieldValid) {
            setInValidForm(false);
        }
    };

    const validateTextField = ({ target: { value, id } }) => {
        if (id === 'mail') {
            const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const email = String(value).toLowerCase();
            if (!regExp.test(email)) {
                setFormError({ ...formError, mailError: 'Не корректный имеил' });
                setInValidForm(true);
                return;
            }
            setFormError({ ...formError, mailError: '' });
            validateAllTextField();
            return;
        }
        const regExp = /(?=^.{6,}$)/;
        if (!regExp.test(value)) {
            setFormError({ ...formError, passwordError: 'Пароль от 6 символов' });
            setInValidForm(true);
            return;
        }
        setFormError({ ...formError, passwordError: '' });
        validateAllTextField();
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <form className={styles.form}>
            <div className={styles.input}>
                {mailError && <span className={styles.error}><b>{mailError}</b></span>}
                <TextField
                    id="mail"
                    placeholder="Логин (email)"
                    value={mail}
                    onChange={changeTextField}
                    onBlur={validateTextField}
                    required
                />
            </div>
            <div className={styles.input}>
                {passwordError && <span className={styles.error}><b>{passwordError}</b></span>}
                <TextField
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={changeTextField}
                    onBlur={validateTextField}
                    required
                />
            </div>
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
