import React, { useState } from 'react';
import TextField from '../TextField';

const FormAuth = () => {
    const [formValue, setFormValue] = useState({
        nameValue: '',
        passwordValue: '',
    });
    // const [formError, setFormError] = useState('');
    const { nameValue, passwordValue } = formValue;
    return (
        <form>
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
        </form>
    );
};

export default FormAuth;
