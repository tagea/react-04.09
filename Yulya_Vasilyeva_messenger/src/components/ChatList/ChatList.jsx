//импортируем пользовательские стили
import './ChatList.scss';

//импорт React
import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { chatList } from '../../chat-data';

class ChatList extends PureComponent {
    render() {
        const { match } = this.props;
        const login = match.params.login;
        return (
            <div className="chat">
                <h1 className="main-header">Список чатов</h1>
                <ul className="chat-list">
                    {chatList.map( item => {
                        return(
                           <li key={item.id} className="chat-item"><Link to={`/chat/${login}/${item.id}`}>{item.name}</Link></li>     
                        );
                    })}

                </ul>
            </div>
        );
    }
}
ChatList.propTypes = {
    match: PropTypes.object,
};
export default withRouter(ChatList);