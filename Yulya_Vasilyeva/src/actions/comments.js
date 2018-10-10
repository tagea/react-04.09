import { createAction } from 'redux-actions';

import requestData from './func';

export const getCommentsList = createAction('[Comments] Receive');
export const getCommentsPost = createAction('[CommentsPost] Receive');
//подписываем событие
export const mountEventCommentsList = (dispatch) => {
    //список всех комментариев
    requestData('comments').then((data) => {
        dispatch(getCommentsList(data));
    })
}
export const mountEventCommentsPost = (dispatch) => (postId) =>{
    //отображение комментария по заданному ID
    requestData(`comments?postId=${postId}`).then((data) => {
        dispatch(getCommentsPost(data));//загружаем данные в store
    })
}
//отправляем комментарий
export const sendComment = () => (options) =>{
    requestData('comments', options);
}