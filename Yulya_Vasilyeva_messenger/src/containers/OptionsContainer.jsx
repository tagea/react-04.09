//импорт React
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


import Options from 'components/Options';
import { mountEventsGetUser } from 'actions/user';

class OptionsContainer extends PureComponent {
    componentDidMount(){
        const { mountEventsGetUser } = this.props;
        mountEventsGetUser();
    }
    render() {
        const { match } = this.props;
        const login = match.params.login;
            
        return <Options user={login}/>;    
    }
}
OptionsContainer.propTypes = {
    mountEventsGetUser: PropTypes.func,
    match: PropTypes.object,
};
function mapStateToProps(state, ownProps){
    return{
        ...ownProps,
        user: state.user.userData,
    };
}
function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        mountEventsGetUser: () => mountEventsGetUser(dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OptionsContainer));