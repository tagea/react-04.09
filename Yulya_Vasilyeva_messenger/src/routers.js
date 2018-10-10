import ChatListContainer from 'containers/ChatListContainer';
import MessageWindow from 'components/MessageWindow';
import LoginContainer from 'containers/LoginContainer';

export default [
    {
        path: '/',
        component: LoginContainer,
        exact: true
    },
    {
        path: '/chatroom/:login',
        component: ChatListContainer,
        exact: true
    },
    {
        path: '/chat/:login/:id',
        component: MessageWindow,
        exact: true
    }
];