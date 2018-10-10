import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

export const getUser = createAction('[User] Get');
//подписываем событие
export const mountEventsGetUser = (dispatch) => {
     socket.on('user', (user) => {
         dispatch(getUser(user));
     });
};

//отправляем пользователя в сокет
export const sendUser = () => (user) => {
    socket.emit('user', user);
};