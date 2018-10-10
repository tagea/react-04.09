//импортируем пользовательские стили
import './OpenUserChat.scss';
import imgArrow from './img/arrow-back.svg';

//импорт React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import {chatList} from '../../../chat-data';

class OpenUserChat extends PureComponent {
    render() {
        const { id, match } = this.props;
        const login = match.params.login;
        return (
            <div className="open-user">
                <div className="arrow-back">
                    <Link to={`/chatroom/${login}`}><img className="arrow-back-img" src={imgArrow} alt="назад" title="вернуться к списку чатов"/></Link>
                </div>
                <div className="user-info">
                    <span className="user-name">{chatList[id-1].name}</span>
                </div>
            </div>
        );
    }
}
OpenUserChat.propTypes = {
    id: PropTypes.string,
    match: PropTypes.object,
};
export default withRouter(OpenUserChat);