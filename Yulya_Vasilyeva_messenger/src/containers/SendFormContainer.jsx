import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SendForm from 'components/MessageWindow/SendForm';
import {sendComment} from 'actions/comment';

class SendFormContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: '',
        };
    }
    //изменение формы с сообщением
    changeInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }

    sendMessage = (e) => {
        const { sendComment } = this.props;
        const { comments } = this.state;
        sendComment(comments);
        this.setState({
            comments: '',
        });
    }
    render() {
        const { comments } = this.state;
        return (
            <SendForm comments={comments} changeInput={this.changeInput} sendMessage={this.sendMessage}/>
        );

    }
}
//оптравляем сообщения в store
function mapDispatchToProps(dispatch, props) {
    return {
      ...props,
      sendComment: sendComment(dispatch),
    }
}
export default connect(mapDispatchToProps)(SendFormContainer);