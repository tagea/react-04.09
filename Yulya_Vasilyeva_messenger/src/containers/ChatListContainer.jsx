//импорт React
import React, { Component, Fragment } from 'react';

import ChatList from 'components/ChatList';
import OptionsContainer from 'containers/OptionsContainer'; //опции чата

export default class ChatListContainer extends Component {
    render() {
        return (
            <Fragment>
                <ChatList />
                <OptionsContainer />
            </Fragment>
        );
    }
}
