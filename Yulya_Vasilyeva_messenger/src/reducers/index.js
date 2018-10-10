//для корневого редьюсера
import { combineReducers } from 'redux';
//импортируем редьюсер для хранения пользователей
import userReducer from './user';
import commentReducer from './comment';
//регистрируем в store ветки
export default combineReducers({
    user: userReducer,
    comment: commentReducer,
});