import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Messages from 'components/MessageWindow/Messages';
import SendForm from 'components/MessageWindow/SendForm';
import { mountEventsGetComment, sendComment } from 'actions/comment';

class MessagesContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            message: '',
        };
    }
    //изменение формы с сообщением
    changeInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }

    sendMessage = (event) => {
        const { sendComment } = this.props;
        const { message, author } = this.state;
        
        sendComment({message,author});
        //после отправки, чистим поле для сообщения
        this.setState({
            message: '',
        });
        event.preventDefault();
    }
    componentDidMount() {
        const { match, mountEventsGetComment } = this.props;

        mountEventsGetComment();
        this.setState({
            author: match.params.login,
        });
    }
    render() {
        const { message } = this.state;
        const { comments } = this.props;
        return (
            <Fragment>
                <Messages comments={comments} />
                <SendForm message={message} changeInput={this.changeInput} sendMessage={this.sendMessage} />
            </Fragment>
        );
    }
}
MessagesContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    mountEventsGetComment: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        comments: state.comment.commentList,
    };
}
function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        mountEventsGetComment: () => mountEventsGetComment(dispatch),
        sendComment: sendComment(dispatch),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MessagesContainer));