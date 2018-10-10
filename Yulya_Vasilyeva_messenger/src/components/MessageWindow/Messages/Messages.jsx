//импортируем пользовательские стили
import './Messages.scss';

//импорт React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Messages extends PureComponent {
    render() {
        const { comments } = this.props;
        return (
            <div className="user-messages">
                {comments.map((item, indx) => //генерируем сообщения из JSON
                      <div key={indx} className={'msg-left'}>{item.author}:{item.message}</div>      
                )} 
            </div>
        );
    }
}
Messages.propTypes = {
    isLoading: PropTypes.bool,
    comments: PropTypes.array,
};