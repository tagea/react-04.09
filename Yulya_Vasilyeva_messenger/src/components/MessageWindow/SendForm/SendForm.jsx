//импортируем пользовательские стили
import './SendForm.scss';

//импорт React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SendForm extends PureComponent {
    render() {
        const { changeInput,sendMessage, message } = this.props;
        return (
            <form action="#" className="send-form">
                <textarea onChange={changeInput} id="message" name="message" className="send-message" value={message}></textarea>
                <button onClick={sendMessage} type="button" className="send-button">Отправить</button>
            </form>
        );
    }
}
SendForm.propTypes = {
    changeInput: PropTypes.func,
    sendMessage: PropTypes.func,
    message: PropTypes.string,
};