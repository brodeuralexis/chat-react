'use strict';

import c from 'classnames';
import React from 'react';
import PureRender from 'pure-render-decorator';

import Message from './message';

import styles from './list.scss';

@PureRender
export default class MessageList extends React.Component {

    static propTypes = {
        messages: React.PropTypes.array.isRequired
    };
    
    scrollToBottom() {
        const list = this.refs.list;
        
        list.scrollTop = list.scrollHeight - list.offsetHeight;
    }
    
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentWillUpdate() {
        const list = this.refs.list;
        if (list) {
            this.__shouldScroll = list.scrollTop === list.scrollHeight - list.offsetHeight;
        }
    }
    
    componentDidUpdate() {
        if (this.__shouldScroll) {
            this.scrollToBottom();
        }
    }

    render() {
        const {
            messages
        } = this.props;

        return (
            <div ref="list" className={ styles.list }>
                <div className={ styles.messages }>
                    { messages.map((message, index) => {
                        return (
                            <div key={ message.id }>
                                <Message
                                    message={ message }
                                />
                                { index !== messages.length - 1 && (
                                    <hr noShade className={ styles.hr } />
                                ) }
                            </div>
                        );
                    }) }
                </div>
            </div>
        );
    }

}
