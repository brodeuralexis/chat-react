'use strict';

import _ from 'lodash';
import c from 'classnames';
import React from 'react';
import PureRender from 'pure-render-decorator';
import { connect as Connect } from 'react-redux';

import styles from './message.scss';

@Connect((state, props) => {
    return {
        isFromCurrentUser: state.session.id === props.message.user.id
    };
})
@PureRender
export default class Message extends React.Component {

    static propTypes = {
        message: React.PropTypes.object.isRequired,
        isFromCurrentUser: React.PropTypes.bool.isRequired
    };

    render() {
        const {
            message,
            isFromCurrentUser
        } = this.props;

        return (
            <div className={ c(styles.messageRoot, { [styles.current]: isFromCurrentUser }) }>
                <div className={ styles.message }>
                    <div className={ styles.username }>
                        { message.user.username }
                    </div>
                    <div className={ styles.content }>
                        { message.content }
                    </div>
                </div>
            </div>
        );
    }

}
