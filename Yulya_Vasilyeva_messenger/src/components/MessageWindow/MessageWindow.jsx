//пользовательские стили
import './MessageWindow.scss';

//импорт React
import React, { Component, Fragment } from 'react';
//для проверки свойств компонента
import PropTypes from 'prop-types';

//импортируем пользовательские компоненты
import OpenUserChat from './OpenUserChat/';//открытый пользователь
import MessageContainer from 'containers/MessageContainer';//сообщения
import OptionsContainer from 'containers/OptionsContainer'; //опции чата

export default class MessageWindow extends Component {  
    render() {
        const { match } = this.props;
        const id = match.params.id;
        return (
            <Fragment>
            <div className="message-window">
                <OpenUserChat id={id}/>
                <MessageContainer />
            </div>
            <OptionsContainer />
            </Fragment>
        );
    }
}
MessageWindow.propTypes = {
    match: PropTypes.object,
};