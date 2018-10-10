import './Login.scss';

//импорт React
import React, { PureComponent } from 'react';

export default class Login extends PureComponent {
    render() {
        const { changeInput,validateForm } = this.props;
        return (
            <div className="log-window">
                <h2>Войти в чат</h2>
                <p className="text">Без регистрации, придумай себе уникальный логин, введи пароль, чтобы мы тебя запомнили и вперед!</p>
                <form action="./index.html" className="form-login">
                    <div className="form-group">
                        <label htmlFor="name-user">Логин</label>
                        <input onChange={changeInput} type="text" id="name-user" name="login" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass-user">Пароль</label>
                        <input onChange={changeInput} type="password" id="pass-user" name="pass" autoComplete="off" />
                    </div>
                    <button onClick={validateForm} type="button" className="btn-enter">Войти</button>
                </form>
            </div>
        );
    }
}