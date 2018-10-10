import { handleActions } from 'redux-actions';
//импортируем action
import { getUser } from 'actions/user';

const initialState = {
    userData: {},//данные пользователя
};

export default handleActions({
    [getUser]: (state, action) => {
        return {
            ...state,
            userData: action.payload,
        };
    }
}, initialState);