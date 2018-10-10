//Пользовательские стили
import './_index.scss';

//компоненты React
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routers';
import store from './store';

//Главный компонет
class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    {/*загружаем список чатов на главную, по ссылке на chat доступен нужный чат*/}
                    {routes.map((item, indx) => <Route key={indx} {...item} />)}
                </Switch>
            </Fragment>
        );
    }
}
ReactDOM.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.querySelector('#root')
);