import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

export const getComment = createAction('[Comment] Get');
//подписываем событие
export const mountEventsGetComment = (dispatch) => {
     socket.on('comments', (comments) => {
         dispatch(getComment(comments));
     });
};

//отправляем комметарий в сокет
export const sendComment = () => (comments) => {
    socket.emit('comments', comments);
};