//импортируем пользовательские стили
import './Options.scss';

//импорт React
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Options extends PureComponent {
    render() {
        const { user } = this.props;
        return (
            <div className="message-options">
                Информация о пользователе:
                    <p>Пользователь: {user}</p>
                    <Link className="btn-out" to="/">Выйти</Link>
            </div>
        );
    }
}
Options.propTypes = {
    user: PropTypes.string,
};