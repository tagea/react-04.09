import { handleActions } from 'redux-actions';
//импортируем action
import { getComment } from 'actions/comment';

const initialState = {
    commentList: [],//данные пользователя
};

export default handleActions({
    [getComment]: (state, action) => {
        return {
            ...state,
            commentList: state.commentList.concat([action.payload]),
        };
    }
}, initialState);