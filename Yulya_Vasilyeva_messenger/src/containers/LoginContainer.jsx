//импорт React
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from 'components/MessageWindow/Login';
import { sendUser } from 'actions/user';

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
            user: {},
            redirectToReferrer: false,
        };
    }

    changeInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }
    validateForm = () => {
        const { sendUser } = this.props;
        const { login, pass, user } = this.state;
        
        if(login !== '' && pass !== ''){
            user.login = login
            user.pass = pass;
            sendUser(user);
            this.setState({ 
                redirectToReferrer: true 
            });  
        }
        else{
            alert('Вы оставили незаполненные поля');
        }
    }
    render() {
        const { redirectToReferrer, login } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={`/chatroom/${login}`}/>;
        }
        return (
            <Login validateForm={this.validateForm} changeInput={this.changeInput}/>
        );
    }
}
//проверка типов
LoginContainer.propTypes = {
    login: PropTypes.string,
    pass: PropTypes.string,
}
// доставляем функции в props
function mapDispatchToProps(dispatch, props) {
    return {
      ...props,
      sendUser: sendUser(dispatch),
    }
}
export default connect(mapDispatchToProps)(LoginContainer);