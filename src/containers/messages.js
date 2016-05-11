'use strict';

import _ from 'lodash';
import React from 'react';
import update from 'react-addons-update';
import { connect as Connect } from 'react-redux';
import PureRender from 'pure-render-decorator';

import MessageActions from '../actions/message';
import TypingActions from '../actions/typing';

import MessageList from '../components/message/list';
import MessageBar from '../components/message/bar';

import styles from './messages.scss';

@Connect(state => {
    return {
        messages: state.messages
    };
})
@PureRender
export default class Messages extends React.Component {

    static propTypes = {
        messages: React.PropTypes.array.isRequired
    };

    state = {
        message: {
            content: ''
        }
    };

    handleMessageChange = (value) => {
        if (value === '' && this.state.message.content !== '') {
            TypingActions.stop();
        }
        else if (value !== '' && this.state.message.content === '') {
            TypingActions.start();
        }

        this.setState(state => update(state, {
            message: {
                content: {
                    $set: value
                }
            }
        }));
    };

    handleMessageSubmit = () => {
        MessageActions.send(this.state.message);
        this.handleMessageChange('');
    };

    render() {
        return (
            <div className={ styles.messages }>
                <MessageList messages={ this.props.messages } />
                <MessageBar { ...this.state.message } onChange={ this.handleMessageChange } onSubmit={ this.handleMessageSubmit } />
            </div>
        );
    }

}
