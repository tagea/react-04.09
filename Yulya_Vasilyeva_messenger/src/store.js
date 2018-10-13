//создаем хранлище данных
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//импортируем корневой редьюсер
import rootReducer from 'reducers/';

//MIDDLEWARE
//store - данные из стора
//next - следующая по цепочке действие (reducer или middleware),
//если не вызовем, то управление след. обработчику не передастся
//можно проверять авторизацию
//action - 
/*const logger = store => next => action => {//длинный вариант без redux-logger
    console.log('Before state', store.getState());
    console.log('Action', action);
    
    const result = next(action);

    console.log('Next state', store.getState());
    return result;
};*/
//передаем в хранилище корневой редьюсер
export default createStore(
    rootReducer,
    //process.env.mode === 'dev' для продакш исключение
    applyMiddleware(logger),//применяем логгер
);